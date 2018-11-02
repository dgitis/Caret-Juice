###
# Compass
###

compass_config do |config|
  # Require any additional compass plugins here.
  #config.add_import_path "bower_components/foundation/scss"
  
  # Set this to the root of your project when deployed:
  config.http_path = "/"
  config.css_dir = "stylesheets"
  config.sass_dir = "stylesheets/components"
  config.images_dir = "images"
  config.javascripts_dir = "javascripts"

  # You can select your preferred output style here (can be overridden via the command line):
  # output_style = :expanded or :nested or :compact or :compressed

  # To enable relative paths to assets via compass helper functions. Uncomment:
  relative_assets = true

  # To disable debugging comments that display the original location of your selectors. Uncomment:
  # line_comments = false


  # If you prefer the indented syntax, you might want to regenerate this
  # project again passing --syntax sass, or you can uncomment this:
  # preferred_syntax = :sass
  # and then run:
  # sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

end

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
#Change build directory for GitHub Pages publishing
set :build_dir, 'docs'
# Helpers
helpers do
  def find_author(author_slug)
    author_slug = author_slug.downcase
    result = data.authors.select {|author| author.keys.first == author_slug }
    raise ArgumentError unless result.any?
    result.first
  end

  def articles_by_author(author)
    sitemap.resources.select do |resource|
    resource.data.author == author.name
    end.sort_by { |resource| resource.data.date }
  end
  
  def author_path(author)
    "/blog/author/#{author.keys.first}"
  end
  
  def build_author_articles(articles)
    author_articles = []
    articles.each do |article|
      author_article = article.data.author
      author_articles.push(author_article) unless author_articles.include? author_article
    end
    return author_articles
  end
  
  def find_category(category_slug)
    category_slug = category_slug.downcase
    result = data.categories.select {|category| category.keys.first == category_slug }
    raise ArgumentError unless result.any?
    result.first
  end 
end
###

###
# Markdown
###

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

###
# Code highlighting
###

#activate :rouge_syntax  possibly outdated


#activate :directory_indexes
activate :syntax, :line_numbers => true

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Autoprefixer adds vendor prefixes and removes deprecated ones
activate :autoprefixer

activate :sprockets
# Add bower's directory to sprockets asset path
#after_configuration do
#  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
#  sprockets.append_path File.join "#{root}", @bower_config["directory"]
#  sprockets.append_path File.join "#{root}", 'bower_components'
#  
#end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'assets/images'

#bourbon_path = Gem::Specification.find_by_name('bourbon').gem_dir
#    set :js_assets_paths, [File.join(root, 'bower_components')]
#    set :sass_assets_paths, [File.join(root, 'bower_components/foundation/scss'), File.join(bourbon_path, 'app/assets/stylesheets')]
    
 
page "contractors.html", :layout => :landingpage
page "/sitemap.xml", :layout => false
page "/feed.xml", :layout => false
page "CNAME", :layout => false

ignore 'bower_components/*'
ignore 'calendar.html'
ignore 'tag.html'
ignore 'blog/category/index.html'
ignore 'blog/author/index.html'
ignore '.git'
ignore '.gitignore'

activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "{title}.html"
  blog.layout = "blog"
  #blog.new_article_template = File.expand_path('../source/layouts/blog.erb', __FILE__)

  blog.custom_collections = {
    category: {
      link: '/category/{category}',
      template: '/category/template.html'
    },
    author: {
      link: '/author/{author}',
      template: '/author/template.html'
    }
  }
end


def build_categories(articles)
  categories = []
  articles.each do |article|
    category = article.metadata[:page]['category']
    categories.push(category) unless categories.include? category
  end
  return categories
end

configure :development do
  set :debug_assets, true
  set :sass, :sourcemap => :inline
  activate :disqus do |d|
    d.shortname = 'caretjuicelocal'
  end
end



configure :build do
  activate :disqus do |d|
    d.shortname = 'caretjuice' # Replace with your Disqus shortname.
  end
  # For example, change the Compass output style for deployment
   activate :minify_css

  # Minify Javascript on build
   activate :minify_javascript

  # Enable cache buster
  activate :asset_hash, :ignore => [/^blog/]

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

#data.authors.each do |author|
#  page "/blog/author/#{author[0]}", :proxy => "/author/template.html" do
#    @author = author
#  end
#end

data.authors.each do |author|
  proxy "/blog/author/#{author[0]}", "/author/template.html"
end

#data.categories.each do |category|
#  page "/blog/category/#{category[0]}.html", :proxy => "/category/template.html" do
#    @category = category
#  end
#end

data.categories.each do |category|
  proxy "/blog/category/#{category[0]}", "/author/template.html"
end

data.authors.collect {|author| author.keys.first }.each do |author_slug, author_data|
  proxy "/blog/author/#{author_slug}",
        '/author/template.html',
        locals: { 
          author_slug: author_slug,
        }
end
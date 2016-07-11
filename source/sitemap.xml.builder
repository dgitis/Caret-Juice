xml.instruct!
xml.urlset 'xmlns' => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  sitemap.resources.select { |page| page.path =~ /\.html/ && page.data.sitemap != false }.each do |page|
    xml.url do
      if page.path =~ /index\.html/
        xml.loc "#{data.sitemap.url}"
      else
        xml.loc "#{data.sitemap.url}#{page.path}"
      end
      xml.lastmod Date.today.to_time.iso8601
      xml.changefreq page.data.changefreq || "monthly"
      xml.priority page.data.priority || "0.5"
    end
  end
end
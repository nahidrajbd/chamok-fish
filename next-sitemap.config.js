/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || "https://chamakfishfeed.com.bd",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ["/404"],
    additionalPaths: async (config) => [
        await config.transform(config, "/"),
        await config.transform(config, "/products"),
        await config.transform(config, "/about"),
        await config.transform(config, "/why-chamok"),
        await config.transform(config, "/dealers"),
        await config.transform(config, "/contact"),
    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://chamakfishfeed.com.bd/sitemap.xml",
        ],
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};

module.exports = config;

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Flex({
      style: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        borderBottom: "1px solid var(--gray-300)",
      },
      components: [
        { Component: Component.PageTitle(), grow: false },
        {
          Component: Component.Flex({
            components: [
              { Component: Component.Search(), grow: true },
              { Component: Component.Darkmode() },
              { Component: Component.ReaderMode() },
            ],
          }),
        },
      ],
    }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "🜲 The NaguVault": "https://easilyamewsed.github.io/The-NaguVault/",
      "💬 Contact": "https://github.com/easilyamewsed",
    },
  }),
}

// Default single-page layout
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Explorer({
      title: "📂 Vault Explorer",
      folderClickBehavior: "collapse", // works like Obsidian
    }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph(),
  ],
}

// Default list/folder/tag pages
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.Explorer({
      title: "📂 Vault Explorer",
      folderClickBehavior: "collapse",
    }),
  ],
  right: [],
}

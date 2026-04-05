// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Things I&#39;m building — agentic systems, dev tools, and side projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Neal Zhang — Software Engineer working on agentic development and memory research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-gallery",
              title: "gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/gallery/";
              },
            },{id: "dropdown-world-map",
              title: "world map",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/worldmap/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "post-building-this-website",
        
          title: "Building This Website",
        
        description: "How I built this personal website with al-folio, Jekyll, and GitHub Pages — with an AI copilot doing most of the work.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/building-this-website/";
          
        },
      },{id: "projects-agentictaskx",
          title: 'AgenticTaskX',
          description: "Personal website and digital home — the Free Guy&#39;s base of operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agentictaskx/";
            },},{id: "projects-codebase-to-course-v2",
          title: 'Codebase-to-Course v2',
          description: "A schema-driven pipeline that turns any codebase into an interactive HTML course — 75% fewer tokens than v1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/codebase_to_course_v2/";
            },},{id: "projects-agentic-memory-system",
          title: 'Agentic Memory System',
          description: "Exploring how AI agents build and maintain long-term memory — the key to agents that actually learn.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coming_soon_1/";
            },},{id: "projects-agentic-dev-tools",
          title: 'Agentic Dev Tools',
          description: "Tools and utilities for building with AI agents — from a PM who ships.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coming_soon_2/";
            },},{id: "projects-ppt-to-course",
          title: 'PPT-to-Course',
          description: "Claude Code skill that converts PowerPoint or PDF slide decks into interactive single-page HTML courses with themes, quizzes, and PNG infographic export.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ppt_to_course/";
            },},{id: "projects-tmux-tutorial",
          title: 'tmux Tutorial',
          description: "Interactive tmux tutorial with hands-on exercises, PNG training cards, and completion certificate.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tmux_tutorial/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/agentictaskx", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhangneal", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/NealZha48958325", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

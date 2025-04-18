# Portfolio Website Development Plan

Based on the requirements (separate pages, interactive project cards, Shadcn/UI, contact form) and the provided resume, here's the plan:

**Phase 1: Setup & Foundation**

1.  **Install Shadcn/UI:** Integrate Shadcn/UI into the existing Next.js project. This involves running their CLI tool and setting up the necessary configuration.
2.  **Configure Tailwind:** Define a basic theme in `tailwind.config.js` (colors, fonts if needed beyond the default Geist) to ensure consistency, leveraging Shadcn's theme setup.
3.  **Basic Layout:** Modify `src/app/layout.tsx` to include a persistent Header/Navbar and Footer component across all pages.
4.  **Create Core Components:**
    *   `Header`: Navigation links (Home, Projects, Contact).
    *   `Footer`: Basic footer with copyright and maybe links to GitHub/LinkedIn.
    *   `SectionWrapper`: A reusable component to provide consistent padding/margins for page sections.

**Phase 2: Page Creation & Content Integration**

1.  **Home Page (`/`)**:
    *   **Hero Section:** Display your Name, Title (e.g., "ML Engineer"), Career Objective, and contact icons/links (GitHub, Email, LinkedIn).
    *   **Skills Section:** List your Skills (Programming, Frameworks, DevOps, Cloud, etc.) perhaps using Shadcn badges or cards.
    *   **(Optional) Highlights:** Briefly showcase top Achievements or Competition wins.
2.  **Projects Page (`/projects`)**:
    *   **Structure:** Use a grid or list layout.
    *   **Content:** Map your Experience, Publications, and AI Competitions into interactive `ProjectCard` components.
    *   **`ProjectCard` Component:** Design this card to display key info (Title, Role/Type, Year, Description/Keywords, Link to GitHub/Publication). Add hover effects or subtle animations for interactivity. Consider filtering options later if needed.
3.  **Contact Page (`/contact`)**:
    *   **Contact Info:** Display your email and LinkedIn profile clearly.
    *   **Contact Form:** Implement a form using Shadcn/UI components (Input, Textarea, Button). For now, this will be frontend only. *Backend functionality (sending the email) would require further steps.*

**Phase 3: Styling & Refinement**

1.  **Apply Shadcn/UI:** Utilize components like `Button`, `Card`, `Input`, `Textarea`, `Badge`, etc., throughout the pages for a modern UI.
2.  **Tailwind Styling:** Use Tailwind CSS for fine-grained layout adjustments, custom styling, and responsiveness.
3.  **Responsiveness:** Ensure the layout and components adapt well to different screen sizes (desktop, tablet, mobile).
4.  **Metadata:** Update `src/app/layout.tsx` and individual page files (`page.tsx`) with appropriate titles and descriptions for SEO.
5.  **Cleanup:** Remove unused default Next.js code and styles from `src/app/page.tsx` and `src/app/globals.css`.

**Technology Stack:**

*   Framework: Next.js (App Router)
*   Language: TypeScript
*   Styling: Tailwind CSS
*   UI Components: Shadcn/UI
*   Fonts: Geist Sans/Mono (default)

**Visual Plan (Mermaid Diagram):**

```mermaid
graph TD
    subgraph Setup
        direction LR
        A[Install Shadcn/UI] --> B(Configure Tailwind);
    end

    subgraph Core Components
        direction LR
        C[Header]
        D[Footer]
        E[SectionWrapper]
        F[ProjectCard]
    end

    subgraph Pages
        G[/ (Home)] --> H(Hero) & I(Skills) & J(Highlights?);
        K[/projects] --> L(Project List);
        L --> F;
        M[/contact] --> N(Contact Info) & O(Contact Form);
    end

    subgraph Data
        P[resume.tex Data] --> H & I & L & N;
    end

    Setup --> Core Components --> Pages;
    Pages -- Uses --> Core Components;
    Pages -- Styled By --> B;
    Pages -- Styled By --> A;
    Data -- Populates --> Pages;

    classDef page fill:#f9f,stroke:#333,stroke-width:2px;
    class G,K,M page;
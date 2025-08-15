package data

type Profile struct {
    Name        string   `json:"name"`
    Title       string   `json:"title"`
    Bio         string   `json:"bio"`
    Location    string   `json:"location"`
    Skills      []string `json:"skills"`
    SocialLinks []Link   `json:"socialLinks"`
}

type Link struct {
    Label string `json:"label"`
    URL   string `json:"url"`
}

type Project struct {
    ID          int      `json:"id"`
    Slug        string   `json:"slug"`
    Title       string   `json:"title"`
    Description string   `json:"description"`
    Tags        []string `json:"tags"`
}

var SampleProfile = Profile{
    Name:     "K.H",
    Title:    "Full-Stack Developer",
    Bio:      "Next.js と Go を中心にWeb開発をしています。",
    Location: "Japan",
    Skills:   []string{"Next.js", "TypeScript", "Tailwind CSS", "Go", "Echo"},
    SocialLinks: []Link{
        {Label: "GitHub", URL: "https://github.com/hamburger39"},
        {Label: "X", URL: "https://x.com"},
    },
}

var SampleProjects = []Project{
    {ID: 1, Slug: "portfolio", Title: "Portfolio Site", Description: "Next.jsで構築したポートフォリオサイト", Tags: []string{"Next.js", "Tailwind"}},
    {ID: 2, Slug: "go-echo-api", Title: "Go Echo API", Description: "Echoで構築したAPIサーバ", Tags: []string{"Go", "Echo"}},
}

func FindProjectByID(id int) *Project {
    for i := range SampleProjects {
        if SampleProjects[i].ID == id {
            return &SampleProjects[i]
        }
    }
    return nil
}



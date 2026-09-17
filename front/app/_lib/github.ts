const GITHUB_USERNAME = "NotHamada";

export type StarredRepo = {
  name: string;
  owner: string;
  fullName: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  topics: string[];
};

type GitHubRepoResponse = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  owner: { login: string };
};

export async function getStarredRepos(limit = 6): Promise<StarredRepo[]> {
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=100&sort=created&direction=desc`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as GitHubRepoResponse[];

    return data
      .filter(
        (repo) => repo.owner.login.toLowerCase() === GITHUB_USERNAME.toLowerCase(),
      )
      .slice(0, limit)
      .map((repo) => ({
        name: repo.name,
        owner: repo.owner.login,
        fullName: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        topics: repo.topics ?? [],
      }));
  } catch {
    return [];
  }
}

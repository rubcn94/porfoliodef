const GITHUB_USERNAME = 'rubcn94';
const GITHUB_API_URL = `https://api.github.com/users/rubcn94/repos`;

export async function fetchGitHubProjects() {
  try {
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) {
      throw new Error('Error fetching GitHub projects');
    }
    const data = await response.json();
    return data.map(repo => ({
      name: repo.name || 'Unnamed Project',
      description: repo.description || 'No description available',
      url: repo.html_url,
      stars: repo.stargazers_count || 0,
      language: repo.language || 'Not specified'
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
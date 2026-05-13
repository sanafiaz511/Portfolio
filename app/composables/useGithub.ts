export const useGithub = () => {

  const repos = ref([])
  const loading = ref(false)

  const fetchRepos = async () => {

    loading.value = true

    try {

      const response = await fetch(
        'https://api.github.com/users/sanafiaz511/repos?sort=updated'
      )

      const data = await response.json()

      repos.value = data

    } catch (error) {

      console.error('GitHub fetch failed', error)

    } finally {

      loading.value = false

    }
  }

  return {
    repos,
    loading,
    fetchRepos
  }
}
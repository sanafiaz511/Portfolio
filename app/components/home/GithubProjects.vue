<template>
  <section class="section-padding">

    <!-- Wrapper Animation -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    >

      <div class="container-custom">

        <!-- Heading -->
        <div
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-center mb-14"
        >
          <p class="text-blue-400 uppercase tracking-widest text-sm mb-3">
            Open Source
          </p>

          <h2 class="text-4xl font-bold">
            GitHub Projects
          </h2>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="text-center text-gray-400">
          Loading repositories...
        </div>

        <!-- Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            v-for="(repo, index) in filteredRepos"
            :key="repo.id"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500,
                delay: index * 120
              }
            }"
            class="glass-card hover-card spotlight-card rounded-2xl p-6"
          >

            <!-- Repo Name -->
            <h3 class="text-xl font-semibold mb-3">
              {{ repo.name }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm mb-6 min-h-[60px]">
              {{ repo.description || 'No description available.' }}
            </p>

            <!-- Languages -->
            <div class="flex gap-2 flex-wrap mb-4">
              <span
                v-for="lang in repo.languages"
                :key="lang"
                class="px-2 py-1 border border-white/10 rounded text-xs text-gray-300"
              >
                {{ lang }}
              </span>
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-4 text-xs text-gray-300 flex-wrap">

              <span class="px-2 py-1 border border-white/10 rounded">
                Public Repo
              </span>

              <span class="px-2 py-1 border border-white/10 rounded">
                Updated: {{ new Date(repo.updated_at).toLocaleDateString() }}
              </span>

            </div>

            <!-- Link -->
            <a
              :href="repo.html_url"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Repository"
              class="inline-block mt-6 text-blue-400 hover:text-blue-300 relative z-50"
            >
              View Repository →
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
const { repos, loading, fetchRepos } = useGithub()

await fetchRepos()

/**
 * Fetch languages for each repo
 */
const enrichedRepos = ref([])

const getLanguages = async (url) => {
  const res = await fetch(url)
  return await res.json()
}

const loadReposWithLanguages = async () => {
  const baseRepos = repos.value.filter(repo => !repo.fork).slice(0, 6)

  enrichedRepos.value = await Promise.all(
    baseRepos.map(async (repo) => {
      let languages = []

      try {
        const langData = await getLanguages(repo.languages_url)
        languages = Object.keys(langData)
      } catch (e) {
        languages = []
      }

      return {
        ...repo,
        languages
      }
    })
  )
}

await loadReposWithLanguages()

const filteredRepos = computed(() => enrichedRepos.value)
</script>
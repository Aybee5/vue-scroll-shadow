<template>
  <div class="demo">
    <h1>Vue Scroll Shadow</h1>
    <p>
      Component that adds shadow to scrollable area works both with vertical and horizontal scrolling.
      <a href="https://github.com/Aybee5/vue-scroll-shadow" target="_blank">GitHub</a>
    </p>
    <div class="container">

      <div>
        <h2>Vertical</h2>
        <VueScrollShadow>
          <div class="vertical-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo libero, facere a qui, quibusdam explicabo
              molestiae perspiciatis repellendus maxime iusto, quos atque unde inventore quae blanditiis. Corporis
              aliquid
              quibusdam, tempora!</p>
          </div>

        </VueScrollShadow>
      </div>

      <div>
        <h2>Horizontal with 20px shadow</h2>
        <VueScrollShadow scrollDirection="horizontal" shadowLength="20px">
          <ul class="horizontal-list">
            <li v-for="state in states" :key="state">{{ state }}</li>
          </ul>
        </VueScrollShadow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueScrollShadow from "vue-scroll-shadow-v3"
import "vue-scroll-shadow-v3/style.css"

const states = ["Alabama", "Alaska", "Arizona", "Arkansas",
  "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas",
  "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
]
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}


.vertical-content {
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  height: 100px;
  overflow: auto;
  width: 200px;
}

.horizontal-list {
  padding: 20px;
  display: flex;
  background-color: #f1f1f1;
  border-radius: 10px;
  height: 100px;
  width: 200px;
  gap: 20px;
  overflow: auto;
  list-style: none;
  white-space: nowrap;
  align-items: center;
}
</style>
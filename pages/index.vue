<script lang="ts" setup>
</script>

<template>
  <div class = "container">
    <div class="index-container">
      <div class = "context-block">
        <h1>Welcome <br>To <span>Sport Laud</span></h1>
        <p>Where [mention what your company does, e.g., we transform ideas into innovative solutions]! We are a [mention your industry or niche, e.g., creative design agency] committed to [mention your mission, e.g., bringing your visions to life through creative design and cutting-edge technology].</p>
        <p>At [Your Company Name], we believe in the power of [mention key values, e.g., creativity, collaboration, and customer satisfaction]. Our dedicated team of [mention relevant team members, e.g., designers, developers, and marketers] is passionate about delivering results that exceed your expectations.</p>

        <div class="button-row">
          <main-button text="Book now" href="/" />
          <main-button text="Become a trainer" href="register" />
        </div>

      </div>
      <div class="image-block">
        <img src="/images/track.jpg" alt="Sport Laud Logo" />
      </div>
    </div>
  </div>
</template>

<style scoped lang = "scss">
  .index-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;

    .context-block{
      width: 70%;
    }

    .image-block{
      width: 30%;

      img{
        width: 100%;
        max-width: 100%;
      }
    }

    .button-row{
      margin-top: 4rem;
      display: flex;
      flex-direction: row;
      gap: 4rem;
    }
  }

</style>

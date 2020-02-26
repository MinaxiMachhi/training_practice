<template>
  <div>
    <b-carousel
      id="myCarousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide> -->

      <div class="center" v-for="photo in photos" :key="photo.id">
        <b-carousel-slide
          :img-src="photo.url"
          style="max-width:1400px; max-height:600px !important;"
          caption="slide"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>
<script>
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      photos: null
    };
  },

  mounted() {
    this.getPhotos(this.photos);
  },

  methods: {
    async getPhotos() {
      let photoUrl = API_URL + "/photos?=";
      this.photos = (await axios.get(photoUrl)).data.slice(0, 5);
      console.log(this.photos);
    },

    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
.center {
  margin-left: 70px;
  margin-top: 20px;
}
</style>
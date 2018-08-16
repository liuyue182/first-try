<template>
  <div class="movie">
    <ul>
      <li v-for="moive in movieList">
        <div class="movie-img">
          <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg" alt="">
        </div>
        <div class="movie-dic">
          <h3>一出好戏</h3>
          <p>观众评<span class="org">8.2</span></p>
          <p>主演<span>hsss</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
  .movie li{
    display: flex;
    padding:10px;
  }
  .movie-img{
    flex-grow: 1;
    width: 0;
  }
  .movie-dic{
    flex-grow: 3;
    width: 0;
    margin-left: 20px;
  }
  .org{
    color: orange;
  }
</style>
<script>
    import Axios from 'axios';
    export default{
        data(){
            return {
                movieList:[]
            }
        },
        created(){
            //https://developers.douban.com/wiki/?title=movie_v2
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250')
                .then((res)=>{
                    this.movieList = res.data.subjects;
                    console.log(this.movieList);
                });
        }
    }
</script>

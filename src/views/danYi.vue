<template>
  <div class="da">
    <header style="position: fixed;top: 0; width: 100%; height: 10rem; background-color: #606266;">
      <div style="height:100%; width: 30rem;margin: 0 auto;">
       <el-button style="height: 100%; width: 100%" round plain @click="$router.push('/')" type="primary">回到首页</el-button>
      </div>
    </header>
    <div class="box">
          <div class="danYi" v-for="(item,index) in chairArr" :key="index">
            <div class="danTop" >
              <img :src=item.imgs alt="">
            </div>
            <div class="danXia">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'danYi',
  data () {
    return {
      chairArr: [
        {
          imgs: require('./img/Y1.jpg'),
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y2.jpg'),
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y3.jpg'),
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y4.jpg'),
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y5.jpg'),
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y6.jpg'),
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y7.jpg'),
          name: '椅子名称'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
 *{
  margin: 0;
  padding: 0;
}
.da {
  padding-top: 10rem;
}
.box {
       display: flex;
       flex-wrap: wrap;
       width: 100%;
       height: 100%rem;
      //  margin-top: 10rem;
       background-color:  #E4E7ED;
            .danYi {
                margin: 4rem;
                width: 40%;
                height: 55rem;
                border-radius: 2rem;
                background-color: aqua;
                  .danTop {
                    border-radius: 2rem 2rem 0 0 ;
                    width: 100%;
                    height: 80%;
                    background-color: red;
                     img {
                      border-radius: 2rem 2rem 0 0 ;
                        width: 100%;
                        height: 100%;
                     }
                  }
                  .danXia {
                    width: 100%;
                    height: 20%;
                    border-radius: 0 0 2rem 2rem;
                    background-color: #fff;
                     p {
                       font-size: 6rem;
                       line-height: 9.25rem;
                       text-align: center;
                       font-family: "楷体";
                     }
                  }
            }

        }
</style>

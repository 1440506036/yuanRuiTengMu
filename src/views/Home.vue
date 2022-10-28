<template>
  <div class="box">
    <header>
      <div class="zuo">
        <div class="men">
          <img  @click="signClick('./img/header2.jpg','门店信息')" src="./img/header2.jpg" alt="">
        </div>
      </div>
      <div class="zhong">
        <div class="top">袁瑞藤木</div>
        <div class="xia">Yuan Rui Jia Ju</div>
      </div>
      <div class="you">
        <!-- <div>家具加工，订做藤椅</div>
        <div>各种藤材料出售</div>
        <div>电话: 15019159159</div>
        <div class="address">地址: 广东省东莞市厚街镇双岗村北溪路40号</div> -->
      </div>
    </header>

    <div class="container">
      <!-- 轮播图 -->
      <div class="carousel">
        <div class="top">
        <h2>新品展示</h2>
        </div>
        <div class="xia">
          <el-carousel height="55rem">
            <el-carousel-item v-for="(item,index) in imgArr" :key="index">
              <img @click="imgClick(item,index,'carousel')" :src=item.imgs alt="">
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>

      <!-- 椅子类 -->
      <div class="chair">
        <div class="top">
          <h2>单人椅</h2>
          <h4 @click="$router.push('/danYi')">查看更多</h4>
        </div>
        <div class="xia" >
          <div class="danYi" v-for="(item,index) in chairArr" :key="index">
            <div @click="imgClick(item,index,'danYi')" class="danTop" >
              <img :src=item.imgs alt="">
            </div>
            <div class="danXia">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      :title="title"
      :visible.sync="signDialog"
      width="85%"
      center
      >
      <div class="signImg">
        <img :src='publicImg' alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="close">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      publicImg: null,
      signDialog: false,
      imgArr: [
        {
          imgs: require('./img/img1.jpg'),
          imgUrl: './img/img1.jpg',
          name: 'Y子椅'
        },
        {
          imgs: require('./img/img2.jpg'),
          imgUrl: './img/img2.jpg',
          name: '子椅'
        },
        {
          imgs: require('./img/img3.jpg'),
          imgUrl: './img/img3.jpg',
          name: '子椅'
        },
        {
          imgs: require('./img/img4.jpg'),
          imgUrl: './img/img4.jpg',
          name: '子椅'
        }
      ],
      chairArr: [
        {
          imgs: require('./img/Y1.jpg'),
          imgUrl: './img/Y1.jpg',
          name: 'Y子椅'
        },
        {
          imgs: require('./img/Y2.jpg'),
          imgUrl: './img/Y2.jpg',
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y3.jpg'),
          imgUrl: './img/Y3.jpg',
          name: '椅子名称'
        },
        {
          imgs: require('./img/Y4.jpg'),
          imgUrl: './img/Y4.jpg',
          name: '椅子名称'
        }
      ]
    }
  },
  methods: {
    signClick (img, men) {
      this.title = men
      this.publicImg = require(img + '')
      this.signDialog = true
    },
    imgClick (i, index, str) {
      this.signDialog = true
      // 轮播图
      if (str === 'carousel') {
        const res = this.imgArr[index].imgUrl
        this.title = this.imgArr[index].name
        this.publicImg = require(res + '')
      }
      // 单人椅
      if (str === 'danYi') {
        const res = this.chairArr[index].imgUrl
        this.title = this.chairArr[index].name
        this.publicImg = require(res + '')
      }
    },
    close () {
      this.signDialog = false
      this.title = ''
      this.publicImg = null
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.box {
  // padding-top: 18rem;
}
header {
  position: relative;
  display: flex;
  width: 100%;
  height: 18rem;
  background-color: #e6a23c;
  .zuo {
    flex: 1;
    height: 100%;
    // background-color: aqua;
    .men  {
      width: 26rem;
      height: 100%;
      // background-color: red;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .address {
    position: absolute;
    top: 13rem;
    left: 39rem;
  }
  .zhong {
    flex: 1;
    height: 100%;
    text-align: center;
    font-family: "华文新魏";
    // background-color: yellow;
    .top {
      height: 8.25rem;
      line-height: 8.25rem;
      font-size: 7.25rem;
    }
    .xia{
       font-size: 3.25rem;
    }
  }
  .you {
    color: #fff;
    flex: 1;
    height: 100%;
    font-size: 1.125rem;
    font-family: "华文新魏";
    // background-color: greenyellow;
  }
}

.container {
  margin: 0 auto;
  width: 100rem;
  height: 200rem;
  background-color: #C0C4CC;
  // 轮播图
    .carousel {
      width: 100%;
      height: 63rem;
      background-color: #fff;
        .top {
          width: 100%;
          height: 8rem;
          font-family: "华文新魏";
          font-size: 5.25rem;
          // background-color: pink;
        }
        .xia {
          width: 100%;
          height: 55rem;
          background-color: aqua;
            img {
              width: 100%;
              height: 100%;
            }
        }
    }
  // 单人椅
    .chair {
      margin-top: 6rem;
      width: 100%;
      height: 132rem;
      background-color: #EBEEF5;
        .top {
          display: flex;
          width: 100%;
          height: 10rem;
          font-family: "华文新魏";
          font-size: 5.25rem;
          background-color: #fff;
            h4 {
              color: red;
              margin-left: 50rem;
              margin-top: 3rem;
            }
        }
        .xia {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 120rem;
          // background-color: cornflowerblue;
            .danYi {
                margin-top: 4rem;
                margin-left: 6rem;
                width: 40%;
                height: 55rem;
                border-radius: 2rem;
                // background-color: aqua;
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
                    background-color: pink;
                     p {
                       color: #fff;
                       font-size: 6rem;
                       line-height: 9.25rem;
                       text-align: center;
                       font-family: "楷体";
                     }
                  }
            }
            // .top {
            // }
        }
    }
}

::v-deep .el-dialog__header {
  background-color:  skyblue;
   span {
    color: #fff;
    font-size: 5.25rem;
    font-family: "楷体";
   }
}

.signImg {
  width: 100%;
  height: 100rem;
  // background-color: red;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

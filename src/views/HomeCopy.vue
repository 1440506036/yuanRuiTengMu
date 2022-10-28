<template>
  <div class="box">
    <!-- 头部 -->
    <header>
      <i><img src="./img/header2.jpg" alt="" /></i>
      <div class="sign">
        <span>袁 瑞 家 具</span>
        <span >Yuan Rui Jia Ju</span>
      </div>
      <div class="address">
        <p>地址: 广东省东莞市厚街镇双岗村北溪路40号</p>
        <p>电话: 15019159159</p>
      </div>
    </header>
    <div class="container">
    <!-- 轮播图 -->
    <div class="carousel">
      <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <img style="width: 100%;height: 100%;" src="./img/img7.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
    </div>
    <!-- 主体部分 -->
    <main>
      <h2 style="text-align: center; font-size: 2.5rem; font-family: 楷体">
        藤木椅子类
      </h2>
      <div class="chair">
        <ul>
          <li v-for="i in 10" :key="i" style="margin-left: 1.875rem">
            <div class="top">
              <img src="./img/img1.jpg" alt="" />
            </div>
            <div class="bottom">
              <p >椅子名称</p>
              <span>材料: 真藤</span>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  width: 90rem;
  height: 100%;
  background-color: darkgray;
}
header {
  position: relative;
  width: 100%;
  height: 10rem;
  background-color: blanchedalmond;
  i {
    position: absolute;
    top: 0;
    left: 12.5rem;
    width: 13rem;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sign {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 18.75rem;
    height: 100%;
    color: black;
    font-size: 3.75rem;
    font-family: "华文新魏";
  }
  .address {
    position: absolute;
    top: 3.6875rem;
    left: 47.9375rem;
    font-size: 1rem;
    font-family: "华文新魏";
  }
}

.carousel {
  width: 100%;
  height: 18.75rem;
  border-radius: 1.875rem;
  background-color: aqua;
}

main {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .chair {
    width: 100%;
    height: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 12.5rem;
        height: 18.75rem;
        margin-right: 1.875rem;
        margin-top: 1.5rem;
        transition: 0.5s;
        list-style-type: none;
        background-color: #fff;
        border-radius: .625rem;
        .top {
          width: 100%;
          height: 13.75rem;
          border-radius: .625rem .625rem 0 0;
          background-color: palevioletred;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .bottom {
          padding-top: .75rem;
          text-align: center;
          font-size: 1.5rem;
          font-family: "楷体";
          color: black;
          p {
            font-size: 1rem;
          }
          span {
            font-size: 1rem;
          }
        }
      }
      li:hover {
        transform: scale(1.1);
        box-shadow: .1875rem .1875rem .1875rem #ccc;
      }
    }
  }
}

// * {
//   margin: 0;
//   padding: 0;
// }
// .container {
//   margin: 0 auto;
//   width: 1200px;
//   height: 2000px;
//   background-color: darkgray;
// }
// header {
//   position: relative;
//   width: 100%;
//   height: 100px;
//   background-color: blanchedalmond;
//   i {
//     position: absolute;
//     top: 0;
//     left: 200px;
//     width: 170px;
//     height: 100%;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .sign {
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0 auto;
//     width: 300px;
//     height: 100%;
//     color: black;
//     font-size: 60px;
//     font-family: "华文新魏";
//   }
//   .address {
//     position: absolute;
//     top: 59px;
//     left: 767px;
//     font-size: 20px;
//     font-family: "华文新魏";
//   }
// }

// .carousel {
//   width: 100%;
//   height: 300px;
//   border-radius: 30px;
//   background-color: aqua;
// }

// main {
//   width: 100%;
//   height: 720px;
//   background-color: #f4f4f4;
//   .chair {
//     width: 100%;
//     height: 100%;
//     ul {
//       display: flex;
//       flex-wrap: wrap;
//       li {
//         width: 200px;
//         height: 300px;
//         margin-right: 30px;
//         margin-top: 24px;
//         transition: 0.5s;
//         list-style-type: none;
//         background-color: #fff;
//         border-radius: 10px;
//         .top {
//           width: 100%;
//           height: 220px;
//           border-radius: 10px 10px 0 0;
//           background-color: palevioletred;
//           img {
//             width: 100%;
//             height: 100%;
//           }
//         }
//         .bottom {
//           padding-top: 12px;
//           text-align: center;
//           font-size: 24px;
//           font-family: "楷体";
//           color: black;
//         }
//       }
//       li:hover {
//         transform: scale(1.1);
//         box-shadow: 3px 3px 3px #ccc;
//       }
//     }
//   }
// }
</style>

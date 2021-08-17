<template>
  <div class="home">
    <div id="amap-container"></div>
    <div id="route-info"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  created() {
    
  },
  mounted() {
    const AMap = window.AMap
    let map = new AMap.Map('amap-container', {
      zoom: 13
    })
    let driving = new AMap.Walking({
      map,
      hideMarkers: true,
      isOutline: false
    })
    driving.search([
      {keyword: '安徽大学罄苑校区',city:'合肥'},
      {keyword: '安徽建筑大学',city:'合肥'}
    ], function(status, result) {
      if (status === 'complete') {
        const steps = result.routes[0].steps
        map.setCenter([steps[0].start_location.lng, steps[0].start_location.lat])
        let lineArr = []
        steps.forEach(ele => {
          ele.path.forEach(item => {
            lineArr.push([item.lng, item.lat])
          })
        })
        let polyline = new AMap.Polyline({
          path: lineArr,
          strokeColor: "aqua", 
          strokeOpacity: 1,
          strokeWeight: 5,
          lineJoin: 'round',
          lineCap: 'round',
          zIndex: 500,
        })
        polyline.setMap(map)
      } else {
        console.log('获取驾车数据失败：' + result)
      }
    })
    
    // let passedPolyline = new AMap.Polyline({
    //   map,
    //   strokeColor: '#AF5',
    //   strokeWeight: 6,
    // })
    // let marker = new AMap.Marker({
    //   map,
    //   position: [117.139161, 36.667547],
    //   icon: new AMap.Icon({
    //     image: require('../assets/logo.png'),
    //     size: new AMap.Size(80,80),
    //     imageSize: new AMap.Size(40,36),
    //   }),
    //   autoRotation: true,
    //   angle: -90,
    // })
    // marker.on('moving', function(e){
    //   passedPolyline.setPath(e.passedPath);
    // })
    // marker.moveAlong(this.lineArr, 200)
  },
  methods: {

  }
}
</script>

<style scoped>
  #amap-container{
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
    border: solid red 1px;
    box-sizing: border-box;
  }
</style>

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "青春纪念册",
        artist: '可米小子',
        url: 'http://www.ytmp3.cn/down/43623.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/57.jpg',
      },
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/51577.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/11.jpg',
      },
      {
        name: '爱情转移',
        artist: '陈奕迅',
        url: 'http://www.ytmp3.cn/down/64345.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/42.jpg',
      }          
    ]
});
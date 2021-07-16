new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "陽のあたる場所へ",
          artist: "平井 大",
          cover: "https://db.songqi.online/go-to-a-place-where-the-sun-shines.jpg",
          source: "https://db.songqi.online/go-to-a-place-where-the-sun-shines.mp3",
          url: "https://music.163.com/song?id=1465230223&userid=380194786",
          blessing: "生日快乐生日快乐生日快乐",
          hide: "",
          author: "小树",
          favorited: false
        },
        {
          name: "Everglow",
          artist: "Coldplay / Gwyneth Paltrow",
          cover: "https://db.songqi.online/everglow.jpg",
          source: "https://db.songqi.online/everglow.mp3",
          url: "https://music.163.com/song?id=37239018&userid=380194786",
          blessing: "月月月月月月，我心目中美好存在的月月，多么幸运彼此遇见！不知不觉认识3年了，如你所说时间就像是坐上了火箭，分别的日子竟也已满1年，我一直觉得自己性格无趣遇事逃避久处生厌，但月月你知道吗，你的出现治愈了我，you give me this feeling this everglow！<br><br>我记得疫情在家你发来的零点生日祝福，记得你陪我改文章熬夜，记得你发的微博，记得你的礼物卡片，记得做工程前你对我的开导，也记得我们一起消食逛操场，一起吃火锅，一起玩游戏，一起唱歌，一起喝酒，一起失眠一整夜，一起在青衣江边聊天一整夜，你带给我的温暖我都清清楚楚的记得，也一直清清楚楚的感受着💞！你的柔软和共情总是能在我脆弱时第一时间安慰到我，在我低谷时给与我自信，在我动摇时让我内心坚定。<br><br>月月，不瞒你说，你是我心目中的情感咨询师和心理导师，真的🆘！虽然提供不了到位的心理咨询，但我愿意做你的倾听者，做你不开心时的树洞🌲🕳️！月月，你说的，我值得，我想说，你更值得，所以想和月月做能够一起度过漫长岁月的朋友👭！<br><br>少女与爱永不老去，月月生日快乐，祝你开心，不止今天",
          hide: "",
          author: "婷婷",
          favorited: false
        },
        {
          name: "光の気配",
          artist: "KinKi Kids",
          cover: "https://db.songqi.online/zmy.jpg",
          source: "https://db.songqi.online/breath-of-light.mp3",
          url: "https://c.y.qq.com/base/fcgi-bin/u?__=oQk6qn45",
          blessing: "祝月月生日快乐<br><br>在未来的日子里振翅高飞",
          hide: "<br>PS：益文要求替换封面照片！",
          author: "文文",
          favorited: false
        },
        {
          name: "Crush",
          artist: "Tessa Violet",
          cover: "https://db.songqi.online/crush.jpg",
          source: "https://db.songqi.online/crush.mp3",
          url: "https://music.163.com/song?id=516358165&userid=380194786",
          blessing: "生日快乐！",
          hide: "我不知道你能不能看到，这首歌歌词99.5%以上是我对你的感受。<br><br>我也不知道我现在在你心中是什么样的地位，可能我的各种你看到的态度已经把我拉到很低了吧。<br><br>我把我本科四年认识的人按照重要程度排序，你在我心中的地位无疑是这些人中排第一的。<br><br>我很喜欢你把我拉进了一个团体中，很喜欢你把我当朋友，我什么都想给你说，给你分享。<br><br>无论好的，坏的都想，我更喜欢你给我分享的日常，但凡与你相关的对我来说都是优先级最高的。<br><br>因为你对我来说很重要，比你想象中还要重要得多。<br><br>有一次你一天末尾发来“不，能，断”，我开始关注我们聊天日期是否持续点亮。<br><br>你说因为我们聊得多把我设置为微信置顶，我也才知道原来微信可以置顶。<br><br>当第一次你说你来一教找我，我真的很开心，想一直跟你在一起学习。<br><br>后面有一次，你说你也想和我一起吃饭，一起学习，我真的很震惊。<br><br>诸如此类让我认定你真的很重要，让我心动的事情还有很多，很多。<br><br>但是我回想起这些事情，那时的我似乎都没有对你袒露我那时的真实感受。<br><br>我真的想回去抽自己两巴掌，告诉他开心直接表达出来，不要藏着憋着。<br><br>当你说你决定去中农的时候，我乐呵了好久。<br><br>一方面为你能去北京这样的城市渡过研究生三年很开心，三年下来你各方面得到的进步都是不可限量的。<br><br>二来是天津和北京高铁就半个小时，我反反复复看了中农与南开的路线，高铁是哪儿到哪儿，地铁又该哪儿到哪儿都看好了。<br><br>正因为这样，我非常想去孙老师那边，一为理想，二为你。<br><br>就当所有一切我都认为开始好起来的时候，我逐渐清晰的认识到我们关系出现了问题。<br><br>面对苏苏益文她们的毕业，我不想让你觉得在实验室觉得没有可依靠的感觉（可能我多想了吧）。<br><br>我想照顾着你，照顾着你感受，但是你告诉我不想认为两个人是绑定在一起的，另外我自己这方面也是想着你需要自己在技能方面成长，如果你不给我说，那么我过多关心反而会让你觉得我烦人。<br><br>我自己这学期的情绪也很不稳定，做了挺多不好的事情的，我很抱歉。<br><br>我想了挺久怎么办，真的不能再以现在这种冷处理方式继续下去，如果真的还想继续下去的话。<br><br>我想我们或许都互相再主动一些呢？这样会不会好一些，作为改变的一开始。<br><br>这真的需要双方的努力了...",
          author: "弟弟",
          favorited: false
        },
        {
          name: "Starlight",
          artist: "Taylor Swift",
          cover: "https://db.songqi.online/starlight.jpg",
          source: "https://db.songqi.online/starlight.mp3",
          url: "https://music.163.com/song?id=19292813&userid=380194786",
          blessing: "我见过一张脸蛋，既不引人注目的迷人，又迷人的引人注目。<br><br>是牵着我的手、是陪我一起睡不着、是欢快干饭、是一起学习、是有过很多个一起时光的人的脸蛋。<br><br>她带着尴尬的我融入了她的集体，拉着唱歌跑调的我一起唱歌，她总觉得我很好使我膨胀。她是我的小盆友，也是我的大朋友。<br><br>这么好的月月一定要永远开心，梦想成真，让我把你变成孩子吧！",
          hide: "",
          author: "倩倩",
          favorited: false
        },
        {
          name: "你曾是少年",
          artist: "焦迈奇",
          cover: "https://db.songqi.online/you-were-a-teenager.jpg",
          source: "https://db.songqi.online/you-were-a-teenager.mp3",
          url: "https://music.163.com/song?id=1368371706&userid=380194786",
          blessing: "咱们都已经三年的饭友了，一起约了那么多回饭，还是第一次给你过生日，这是一次有特殊意义的约饭，真不错。今后的日子里我们还要继续约饭呐，毕竟还有那么多美食没吃遍呢。<br><br>这么好的月月一定要永远开心，梦想成真，让我把你变成孩子吧！",
          hide: "",
          author: "小宋",
          favorited: false
        },
        {
          name: "干杯",
          artist: "五月天",
          cover: "https://db.songqi.online/cheers.jpg",
          source: "https://db.songqi.online/cheers.mp3",
          url: "http://www.kuwo.cn/play_detail/78488053",
          blessing: "往事不回头<br><br>未来不将就<br><br>希望你眼里总有光<br><br>活成自己喜欢的样子<br><br>生日快乐呀",
          hide: "",
          author: "洋小汶",
          favorited: false
        },
        {
          name: "I Sing I Swim",
          artist: "Seabear",
          cover: "https://db.songqi.online/i-sing-i-swim.jpg",
          source: "https://db.songqi.online/i-sing-i-swim.mp3",
          url: "https://music.163.com/#/song?id=4281819&userid=541543776",
          blessing: "️🈷️🈷️生日快乐！<br><br>距离上次告别已经过去37天了！还记得第一次见面在老区恰的烤肉，此后更成为好朋友。每次出去玩总是特别开心，现在想想唯一遗憾的是少拍了很多照片。不出意外的话今年的毕业旅行应该出意外泡汤了。不过明年你毕业的时候我们四人的毕业旅行一定要安排上！<br><br>愿你永远是一个漂亮的少女！永远是一个开心的人儿！<br><br>🎉🎉生日快乐！",
          hide: "",
          author: "老板",
          favorited: false
        },
        {
          name: "逝去的歌",
          artist: "旅行团",
          cover: "https://db.songqi.online/dead-song.jpg",
          source: "https://db.songqi.online/dead-song.mp3",
          url: "https://music.163.com/#/song?id=36199725",
          blessing: "温柔美丽的月月～生日快乐🎂🎂<br><br>出生在夏天的你一定有一颗比夏天热烈的心<br><br>愿你能遇到值得心动的人<br><br>更愿你能一直保持内心的柔软<br><br>与这个世界拥抱和解<br><br>继续走下去<br><br>带着希望和更多的爱<br><br>爱自己爱这个世界<br><br>直到世间所有美好都与你相遇:)",
          hide: "",
          author: "苏苏",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
      // if(!this.tracks[this.currentTrackIndex].favorited){
      //   this.tracks[this.currentTrackIndex].hide="隐藏";
      //  }else{
      //   this.tracks[this.currentTrackIndex].hide="显示";
      //  }
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

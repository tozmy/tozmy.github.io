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
          name: "Visions of Gideon",
          artist: "Sufjan Stevens",
          cover: "https://db.songqi.online/visions-of-gideon.jpg",
          source: "https://db.songqi.online/visions-of-gideon.mp3",
          url: "https://music.163.com/song?id=516358165&userid=380194786",
          blessing: "生日快乐！",
          author: "弟弟",
          favorited: true
        },
        {
          name: "Everglow",
          artist: "Coldplay / Gwyneth Paltrow",
          cover: "https://db.songqi.online/everglow.jpg",
          source: "https://db.songqi.online/everglow.mp3",
          url: "https://music.163.com/song?id=37239018&userid=380194786",
          blessing: "月月月月月月，我心目中美好存在的月月，多么幸运彼此遇见！不知不觉认识3年了，如你所说时间就像是坐上了火箭，分别的日子竟也已满1年，我一直觉得自己性格无趣遇事逃避久处生厌，但月月你知道吗，你的出现治愈了我，you give me this feeling this everglow！<br><br>我记得疫情在家你发来的零点生日祝福，记得你陪我改文章熬夜，记得你发的微博，记得你的礼物卡片，记得做工程前你对我的开导，也记得我们一起消食逛操场，一起吃火锅，一起玩游戏，一起唱歌，一起喝酒，一起失眠一整夜，一起在青衣江边聊天一整夜，你带给我的温暖我都清清楚楚的记得，也一直清清楚楚的感受着💞！你的柔软和共情总是能在我脆弱时第一时间安慰到我，在我低谷时给与我自信，在我动摇时让我内心坚定。<br><br>月月，不瞒你说，你是我心目中的情感咨询师和心理导师，真的🆘！虽然提供不了到位的心理咨询，但我愿意做你的倾听者，做你不开心时的树洞🌲🕳️！月月，你说的，我值得，我想说，你更值得，所以想和月月做能够一起度过漫长岁月的朋友👭！<br><br>少女与爱永不老去，月月生日快乐，祝你开心，不止今天",
          author: "婷婷",
          favorited: false
        },
        {
          name: "光の気配",
          artist: "KinKi Kids",
          cover: "https://db.songqi.online/breath-of-light.jpg",
          source: "https://db.songqi.online/breath-of-light.mp3",
          url: "https://c.y.qq.com/base/fcgi-bin/u?__=oQk6qn45",
          blessing: "生日快乐！",
          author: "文文",
          favorited: false
        },
        {
          name: "Starlight",
          artist: "Taylor Swift",
          cover: "https://db.songqi.online/starlight.jpg",
          source: "https://db.songqi.online/starlight.mp3",
          url: "https://music.163.com/song?id=19292813&userid=380194786",
          blessing: "我见过一张脸蛋，既不引人注目的迷人，又迷人的引人注目。<br><br>是牵着我的手、是陪我一起睡不着、是欢快干饭、是一起学习、是有过很多个一起时光的人的脸蛋。<br><br>她带着尴尬的我融入了她的集体，拉着唱歌跑调的我一起唱歌，她总觉得我很好使我膨胀。她是我的小盆友，也是我的大朋友。<br><br>这么好的月月一定要永远开心，梦想成真，让我把你变成孩子吧！",
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
          author: "洋小汶",
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
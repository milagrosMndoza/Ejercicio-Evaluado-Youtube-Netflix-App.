"use strict";
const API_KEY = "AIzaSyA5CaMF5XAolZJ-2AJfdPW7F3KEpQl9aOI";
class video {
	constructor() {
		this.result = {
			videos: []
			, selectedVideo: null
			, searchTerm: "Peru"
		};
		this.youtubeSearch("Peru");
		$("#inputId").keyup((e) => {
			if (e.keyCode == 13) {
				$("#root").empty();
				this.youtubeSearch($("#inputId").val());
			}
		});
		$("#search").click(() => {
			$("#root").empty();
			this.youtubeSearch($("#inputId").val());
		});
	}
	getVideoList(videos) {
			return videos.map((video, index) => {
				const imageUrl = video.snippet.thumbnails.default.url;
				const url = `https://www.youtube.com/embed/${video.id.videoId}`;
				return `<li> 
                     <img class="media-object" src=${imageUrl} /> 
                     <p> 
                        <iframe class="embed-responsive-item" src=${url}> </iframe>
                     </p>
               </li>`;
			});
		}
		//<iframe className="embed-responsive-item" src={url}> </iframe>
	getVideoList(videos) {
		let primer = 0;
		return videos.map((video, index) => {
			const imageUrl = video.snippet.thumbnails.default.url;
			const url = `https://www.youtube.com/embed/${video.id.videoId}`;
			if (primer == 0) {
				$('.principal').html(`<iframe class="embed-responsive-item" src=${url}> </iframe>`);
				$('.info').html(`<h3>${video.snippet.title}</h3><hr><p>${video.snippet.description}</p><span class='channel'>${video.snippet.channelTitle}</span><br><br><br>`);
				primer++;
				console.log(video.snippet);
				return;
			}
			return `<li class="row" id=${video.id.videoId}> 
                               <div class='col-md-5'><a><img class="media-object" src=${imageUrl} /></a></div><div class='col-md-7'><h5>${video.snippet.title}</h5><span class='channel'>${video.snippet.channelTitle}</span></div>
                        </li>`;
		});
	}
	videoClicks() {
		$("li").click((e) => {
			$("#root").empty();
			let id = $(e.currentTarget).attr("id");
			this.youtubeSearch(id);
		});
	}
	youtubeSearch(searchTerm) {
		YTSearch({
			key: API_KEY
			, term: searchTerm
		}, data => {
			this.result = {
				videos: data
				, selectedVideo: data[0]
				, searchTerm: searchTerm
			};
			var list = this.getVideoList(this.result.videos);
			$("#result").append(list);
			this.videoClicks();
		});
	}
}
let youtube = new video();
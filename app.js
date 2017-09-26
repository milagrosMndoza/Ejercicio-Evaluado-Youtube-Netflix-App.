"use strict";
const API_KEY "AIzaSyC3beUrK0-c49t50ztheqHzKtPYw949C1c";
class video {
	constructor() {
		this.result = {
			videos: [],
			selectedVideo: null,
			searchTerm: "Peru"
		}
	}, this.youtubeSearch("Peru");
	$("#inputId").keyup((e) => {
		if (e.keyCode == 13) {
			$("#root").empty();
			this.youtubeSearch($("#inputId").val());
		}
	});
	$("#search").click(() => {
			$("#lista").empty();
			this.youtubeSearch($("#inputId").val());
		}
		//<iframe className="embed-responsive-item" src={url}> </iframe>
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
		}, youtubeSearch(searchTerm) {
			console.log(searchTerm);
			YTSearch({
				key: API_KEY,
				term: searchTerm
			}, data => {
				console.log("result", data);
				app.result = {
					videos: data,
					selectedVideo: data[0],
					searchTerm: searchTerm
				};
				var list = app.getVideoList(app.result.videos);
				console.log("lis: ", list);
				$("#root").append(list);
			});
		}, videoSearch(searchTerm) {
			jQuery.getJSON("list.json", data => {
				console.log("result", data.items);
				app.result = {
					videos: data.items,
					selectedVideo: data.items[0],
					searchTerm: searchTerm
				};
				var list = app.getVideoList(app.result.videos);
				console.log("lis: ", list);
				$("#root").append(list);
			});
		}
	};
	$(document).ready(app.init);
	init() {
		//app.videoSearch("iPhone");
		app.youtubeSearch("iPhone X");
	},

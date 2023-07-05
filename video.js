
var app = angular.module('videoApp', []);

app.controller('VideoController', ['$scope', function($scope) {
  $scope.videoPlayer = null;
  
  $scope.initPlayer = function() {
    $scope.videoPlayer = videojs('my-video');
  };
  
  $scope.playVideo = function() {
    $scope.videoPlayer.play();
  };
  
  $scope.pauseVideo = function() {
    $scope.videoPlayer.pause();
  };
  
  $scope.skipForward = function(seconds) {
    $scope.videoPlayer.currentTime($scope.videoPlayer.currentTime() + seconds);
  };
  
  $scope.skipBackward = function(seconds) {
    $scope.videoPlayer.currentTime($scope.videoPlayer.currentTime() - seconds);
  };
  
  $scope.restartVideo = function() {
    $scope.videoPlayer.currentTime(0);
    $scope.videoPlayer.play();
  };
  
  // Call initPlayer when the page is loaded
  angular.element(document).ready(function () {
    $scope.initPlayer();
  });
}]);

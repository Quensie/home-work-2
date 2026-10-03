let tv = {};
tv.currentChannel = 1;
tv.nextChannel = function() {
    this.currentChannel++;
};
tv.previousChannel = function() {
    this.currentChannel--;
};
tv.setChannel = function(channel) {
    this.currentChannel = channel;
};
tv.setChannel(4);
//console.log(tv.currentChannel);

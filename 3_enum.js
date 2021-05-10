var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standard"] = 1] = "Standard";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var memberShip = MemberShip.Premium;
console.log(memberShip);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["INST"] = "INST";
    SocialMedia["FB"] = "FB";
})(SocialMedia || (SocialMedia = {}));
var socialMedia = SocialMedia.VK;
console.log(socialMedia);

export interface NewsFeedInterface{
  friendsProfilePic?: string;
  friendsProfileName: string;
  context?: string;
  time: string;
  likedBy?: string;
  photo: string;
  isSeparator: boolean;
}
export const Details: Array<NewsFeedInterface>=[
  {
    friendsProfilePic:"assets/img/IMG_20191110_224607_916.jpg",
    friendsProfileName: "Vamshika Vishwanatham",
    context: "updated",
    time: "12 hrs",
    photo: "assets/img/987A1004.jpg",
    isSeparator:true
},
  {
    friendsProfileName: "Likitha Thodupunuri",
    context: "uploaded picture",
    time: "12hrs",
    photo: "assets/profilepics/girl3.jpg",
    likedBy:"2 likes",
    isSeparator:true
  },
  {
    friendsProfileName: "Kavya Vishwanatham",
    context: "shared picture with...",
    time: "12hrs",
    photo: "assets/profilepics/8.jpg",
    isSeparator:true
  },
  {
    friendsProfileName: "Divya Vishwanatham",
    context: "changed profile picture",
    time: "12hrs",
    photo: "assets/profilepics/12.jpg",
    isSeparator:true
  },
]

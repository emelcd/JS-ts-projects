import "./style.css";

const avatar = document.querySelector<HTMLImageElement>("#avatar")!;
const name = document.querySelector<HTMLHeadingElement>("#name")!;
const job = document.querySelector<HTMLHeadingElement>("#job")!;
const review = document.querySelector<HTMLParagraphElement>("#review")!;
const left = document.querySelector<HTMLImageElement>("#left")!;
const right = document.querySelector<HTMLImageElement>("#right")!;

interface IUserReview {
  user: string;
  job: string;
  review: string;
  avatar: string;
}

const users: IUserReview[] = [
  {
    user: "John Doe",
    job: "Web Developer",
    avatar: "https://i.pravatar.cc/250?img="+ Math.floor(Math.random() * 20),
    review: "I love this product! It's very easy to use and I love the way it helps me to learn new things.",
  },
  {
    user: "Jane Doe",
    job: "UX/UI Designer",
    review: "I tried this product and it really helped me to learn new things.",
    avatar: "https://i.pravatar.cc/250?img="+ Math.floor(Math.random() * 20),

  },
  {
    user: "Jimmy Doe",
    job: "Software Engineer",
    review: "Many thanks to this product! It's very easy to use and I love the way it helps me to learn new things.",
    avatar: "https://i.pravatar.cc/250?img="+ Math.floor(Math.random() * 20),
  }
]

class ReviewCarousel {
  private currentUserIndex: number = 0;
  constructor() {
    this.render();
  }
  render(){
    const user = users[this.currentUserIndex];
    avatar.src = user.avatar;
    name.innerText = user.user;
    job.innerText = user.job;
    review.innerText = user.review;
    avatar.classList.add("fade-in");
    setTimeout(() => {
      name.classList.add("fade-in");
    }, 5e2);
    setTimeout(() => {
      this.cleanup()
    }, 1000);
  }
  handleLeftClick = () => {
    this.currentUserIndex = this.currentUserIndex === 0 ? users.length - 1 : this.currentUserIndex - 1;
    this.render();
  }
  handleRightClick = () => {
    this.currentUserIndex = this.currentUserIndex === users.length - 1 ? 0 : this.currentUserIndex + 1;
    this.render();
  }
  cleanup() {
    avatar.classList.remove("fade-in");
    name.classList.remove("fade-in");
  }
    
}

const reviewCarousel = new ReviewCarousel();

left.addEventListener("click", reviewCarousel.handleLeftClick);
right.addEventListener("click", reviewCarousel.handleRightClick);

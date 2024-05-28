import dynamic from "next/dynamic";
import { LandCanvas } from "../components/canvas";
import PCCanvas from "../components/canvas/pc/PCCanvas";
import SocialInfo from "../components/SocialInfo";

function contact() {
  return (
    <section id="contact" className="mx-auto my-20 px-4 sm:px-8 lg:max-w-7xl">
      <header className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Connected with me
      </header>
      <div className="flex justify-center gap-6">
        <SocialInfo />
      </div>
    </section>
  );
}

export default contact;
{
  /* <div class="sketchfab-embed-wrapper"> <iframe title="Allay and Steve!" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/fcbf4d0b97b74fd8b176fef5740a513b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/allay-and-steve-fcbf4d0b97b74fd8b176fef5740a513b?utm_medium=embed&utm_campaign=share-popup&utm_content=fcbf4d0b97b74fd8b176fef5740a513b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Allay and Steve! </a> by <a href="https://sketchfab.com/Depsis?utm_medium=embed&utm_campaign=share-popup&utm_content=fcbf4d0b97b74fd8b176fef5740a513b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Depsis </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=fcbf4d0b97b74fd8b176fef5740a513b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div> */
}
{
  /* <form action="https://formspree.io/f/xnqoqzqz" method="POST">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="What's your name?"
          required
        />
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="What's your email?"
          required
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="What do you want to say?"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form> */
}
{
  /* <PCCanvas /> */
}

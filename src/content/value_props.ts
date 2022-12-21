import party from '../assets/party.svg';
import above_the_fold_gif_general from '../assets/habitopia_above_the_fold.gif';

import social_accountability_image from '../assets/social_accountability.png';
import gamification_image from '../assets/habitopia_gamification.png';
import financial_reward_gif from '../assets/habitopia_financial_rewards.gif';



const valueProps = [
  {
    header:
      "...supercharged <span style='color: #E78A1E'>with social accountability</span>, 🤗",
    content:
      "Win games by having your friends and likeminded teammates from all around the world as your source of accountability!",
    cta: "Meet likeminded people!",
    media: social_accountability_image,
  },
  {
    header:
      "..., <span style='color: #09A6FF'>immersive gamification</span>, 👾",
    content:
      "Customize your avatar, join competitive leagues, unlock titles and much more!",
    cta: "Compete and cooperate!",
    media: gamification_image,
    reverse: true,
  },
  {
    header: "... and <span style='color: #63D83A'>financial rewards</span>! 🤑",
    content:
      "Build any habits by competing and cooperating in fun challenges with friends and accountability partners from all around the world and get rewarded!",
    cta: "Claim real-life rewards!",
    media: financial_reward_gif,
  },
];

const heroVp = {
  header:
    "<span style='color: #DD09FF'>Unlimited</span> <span style='color: #E78A1E'>accountability</span> to <span style='color: #63D83A'>better</span> <span style='color: #09A6FF'>yourself</span>",
    //  cooperate to become a better version of yourself! <span style='color: #09A6FF'>easy</span>, <span style='color: #E78A1E'>social</span>, <span style='color: #63D83A'>rewarding</span>, and <span style='color: #DD09FF'>fun!</span>",
  content:
    "Turn your habits into a multiplayer game to make them easy, fun and automatic! Join likeminded accountability partners & challengers from all around the world🌎!",
  cta: "Build your dream habit!",
  media: above_the_fold_gif_general,
};

export { valueProps, heroVp };
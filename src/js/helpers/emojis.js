import { defineMessages } from 'react-intl';
import emojiDisappointed from 'images/emojis/disappointed.png';
import emojiSad from 'images/emojis/sad.png';
import emojiNeutral from 'images/emojis/neutral.png';
import emojiSlightlySmiling from 'images/emojis/slightly_smiling.png';
import emojiGrinning from 'images/emojis/grinning.png';

export const emojis = {
  'disappointed': {
      image: emojiDisappointed,
      value: -2,
      emoji: '😞',
    },
  'sad': {
      image: emojiSad,
      value: -1,
      emoji: '🙁',
    },
  'neutral': {
      image: emojiNeutral,
      value: 0,
      emoji: '😐',
    },
  'slightlySmiling': {
      image: emojiSlightlySmiling,
      value: 1,
      emoji: '🙂',
    },
  'grinning': {
      image: emojiGrinning,
      value: 2,
      emoji: '😀',
    }
};

export const i18nEmojis = defineMessages({
  disappointed: {
    id: 'Emoji.Disappointed.toString',
    defaultMessage: 'Disappointed',
  },
  sad: {
    id: 'Emoji.Sad.toString',
    defaultMessage: 'Sad',
  },
  neutral: {
    id: 'Emoji.Neutral.toString',
    defaultMessage: 'Neutral',
  },
  slightlySmiling: {
    id: 'Emoji.SlightlySmiling.toString',
    defaultMessage: 'Slightly Smiling',
  },
  grinning: {
    id: 'Emoji.Grinning.toString',
    defaultMessage: 'Grinning',
  },
});

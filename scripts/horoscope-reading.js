const horoscopePageForm = document.querySelector('.button__close');
horoscopePageForm.addEventListener('click', function() {
  window.location.href = './horoscope.html';
});

// Get the query string from the URL
const queryString = window.location.search;
// Create a URLSearchParams object and pass the query string
const urlParameters = new URLSearchParams(queryString);
const nameSelected = urlParameters.get('name');
const birthdaySelected = urlParameters.get('birthday');
const nameParagraph = document.getElementById('nameParagraph');
const readingParagraph = document.getElementById('readingParagraph');

const horoscopeArray = [
    {sign: "Aries" , startDate: "March 21", endDate: "April 19", reading: "When 2023 begins, your ruling planet, Mars, will be retrograde. Lean into this as an excuse to rest up early in the new year. Things get busy quickly. Soon, Mars injects passion into stagnant relationships, while Venus helps keep the romance flowing. The new year sees you becoming sincere and assertive regarding your needs in love and other areas of your life. Your friends will provide a crucial foundation that helps you in love and steadies you in your career. And, speaking of your professional life, several days indicate abundance is coming your way. Just prepare to release a bad habit (or bad relationship) when Pluto goes retrograde."},
    {sign: "Taurus" , startDate: "April 20", endDate: "May 20", reading: "When your ruling planet, Venus, is retrograde, not only should you avoid making significant changes to your appearance, but your love and professional life could be affected, too. However, the main lesson Venus wants to convey in 2023 is the importance of celebrating yourself, Taurus, so this year's birthday may be extra special. Regarding love, try to be as honest and authentic as possible. Not only does this avoid miscommunication and make the several Mercury retrogrades that go down this year more leisurely, but it also keeps you in control. If you're not the one ending unfulfilling relationships, the lunar eclipse in your sign most definitely will."},
    {sign: "Gemini" , startDate: "May 21", endDate: "June 21", reading: "When the year begins, your ruling planet Mercury is retrograde, Gemini. From there, 2023 brings three more Mercury retrogrades. Rather than worry about these times, which bring back exes and trigger miscommunication, learn how to navigate them stress-free. Regarding matters of love, this year reminds you that intimacy and hot sex can coexist even in casual set-ups, and the importance of human connection. In particular, 2023 sees you establishing a support system through friendships. But to maintain them you want to read how to navigate the chaotic eclipse that falls in Aries and your 11th House of Friendship. Plus, there's reason to celebrate your career early in the new year."},
    {sign: "Cancer" , startDate: "June 22", endDate: "July 22", reading: "Because you're ruled by the moon, you must pay extra attention to the lunar eclipses this year, Cancer. In particular, there's also a full moon and lunar eclipse in Scorpio on Friday, May 5, in your 5th House of Pleasure, which could bring major shakeups to your sex and love life. But don't worry, the stars want what's best for you and not just in romance. The new year sees you not only expanding your social circle but discovering that your new friends love your old friends. And while no astrologer can promise money in this economy, read on to learn what dates are the most promising for your career. (Hint: Leo season is important."},
    {sign: "Leo" , startDate: "July 23", endDate: "August 22", reading: "The new year has the potential to bring major passion to your love life, Leo. However, for this to happen, you must channel the influence of warrior Mars in healthy ways, such as through kinky sex or pillow fights, rather than through actual bickering. But don't get so caught up in sex marathons that you forget to nourish your friendships. Not only is your social circle the pillar of your support system, but 2023 sees you finding networking opportunities through friends. And, yes, it's okay to accept a little help even if you are a prideful lion. Just don't forget to schedule time for catnaps, as this busy year requires plenty of rest."},
    {sign: "Virgo" , startDate: "August 23", endDate: "September 22", reading: "While our country's economy is far too messed up for an astrologer to promise cash, there are still days the stars indicate are beneficial for your career and abundance. After a successful summer, you see professional momentum in the fall, especially around your season, Virgo. But your career is not the only thing on your mind. This is a year for the record books regarding love, especially as the seasons change around the time the sun enters Virgo. Can a summer fling show long-term potential and can you survive the eclipses without jeopardizing your friendships? You'll have to read your entire horoscope to find out."},
    {sign: "Libra" , startDate: "September 23", endDate: "October 23", reading: "Remember, Libra, try to avoid making any major changes to your appearance while your ruling planet, pretty Venus, is retrograde in 2023 (Saturday, July 22 - Sunday, September 3). Any other time is excellent for switching up your hair or your entire look. Your wellness routine is one of many areas of your life to undergo changes in 2023. This year sees movement in your social circle. You're making new friends, but don't worry, you're pleased to see that they get along fabulously with your established ones. And while every month contains romantic moments, by the time Mars enters your sign at the end of August, you will find yourself happy in love and sex, even if it doesn't look like what you expected."},
    {sign: "Scorpius" , startDate: "October 24", endDate: "November 21", reading: "When 2023 begins, Scorpio, one of your ruling planets, Mars, is retrograde. As a result, you're feeling calm and ready to cuddle. You're a sign known for your fierce sexuality, but this year asks you to expand your experience of sensuality. One of your themes this year is to stop equating passion with chaos and learn to find joy in calm, stable relationships, whether romantic, platonic, or professional. When Pluto, your other ruling planet, goes retrograde, you're tasked with letting go of a bad habit, such as social media stalking ('fess up, Scorpio). Thankfully, 2023 sees you growing closer with new friends and generally growing and nurturing your support system. As a result, you need to use your infamous stinger less than usual this year as long as you keep your cool during the eclipse that falls in your sign."},
    {sign: "Sagittarius" , startDate: "November 22", endDate: "December 21", reading: "The new year brings collaboration to your love life. As a result, you and a partner may enter business together, start a band, or join forces to enjoy the role-play scenario of your dreams. However, no matter how hot your romances get, don't neglect your friendships. Like all years, 2023 brings ups and downs and your chosen family is your foundation. With the help of a healthy support system, you're able to take advantage of the days that are advantageous to abundance. And while no astrologer can promise money in this economy, there are many beneficial dates to be aware of."},
    {sign: "Capricornus" , startDate: "December 22", endDate: "January 19", reading: "When your ruling planet, strict Saturn, goes retrograde in 2023, you must make a sacrifice, Capricorn. Don't worry. All this means is that if you don't drop a bad habit, the planets will do it for you. When you receive blessings from both assertive Mars and sweet Venus in your love life, you enjoy hot sex and intimacy, whether you're in a long-term partnership or something casual. And despite the state of our economy, there are several dates worth circling on your calendar that are beneficial for your professional life and money-making. Few signs are as ambitious as you, Capricorn."},
    {sign: "Aquarius" , startDate: "January 20", endDate: "February 18", reading: "You're a rock star, Aquarius. The new year teaches that you can encourage others to be their best selves through positive reinforcement. You have a reputation for neglecting your personal life while you're busy saving the world. One of your lessons this year is that change often begins at a personal level. This is especially true while your ruling planet, rebellious Uranus, goes retrograde. Thankfully, the stars indicate that you succeed in nurturing your relationships this year and, as a result, see growth in your social circle, love life, and career."},
    {sign: "Pisces" , startDate: "February 19", endDate: "March 20", reading: "When it comes to love, 2023 asks you to go ahead and have the tough conversations, Pisces. As the last sign of the zodiac, you're often called the wisest star sign. So, you should know by now that define-the-relationship talks only become more stressful the longer you procrastinate. Regarding your friendships, don't get so caught up in the business of your love life this year that you neglect them. This year also encourages you to accept professional praise (as some may come your way) and admit that you enjoy fame and recognition, even if you are the final and wisest sign of the zodiac."},
];


const findZodiacSign = (date) => {
  const inputDate = new Date(date);

  const filteredSigns = horoscopeArray.filter(horoscopeObj => {
    const startDate = new Date(horoscopeObj.startDate);
    const endDate = new Date(horoscopeObj.endDate);

    return inputDate >= startDate && inputDate <= endDate;
  });

  if (filteredSigns.length > 0) {
    return filteredSigns[0]; // Return the first matching zodiac sign
  }
  return null;
}


const zodiacSign = findZodiacSign(birthdaySelected);

if (zodiacSign) { 
  nameParagraph.textContent = `Hi ${nameSelected}, your zodiac sign is ${zodiacSign.sign}.`;
  readingParagraph.textContent = zodiacSign.reading;
} else {
  nameParagraph.textContent = `Hi ${nameSelected}, please enter a valid date.`;
}
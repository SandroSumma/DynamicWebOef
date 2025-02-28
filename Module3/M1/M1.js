const formatTweet = text => text.length > 280 ? text.slice(0, 277) + "..." : text;
const formatPost = text => text.length > 1000 ? text.slice(0, 997) + "..." : text;


const formatCombo = text => `📢 ${formatTweet(text)}`;

const formatText = () => {
    const inputText = document.getElementById("inputText").value;

    const tweet = formatTweet(inputText);
    const post = formatPost(inputText);
    const combo = formatCombo(inputText);

    document.getElementById("tweetOutput").innerText = `Tweet: ${tweet}`;
    document.getElementById("postOutput").innerText = `Post: ${post}`;
    document.getElementById("comboOutput").innerText = `Combi: ${combo}`;
};

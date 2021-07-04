const quotes = [{
        quote: "철이 없었죠. 커피가 좋아서 유학을 했다는 자체가",
        author: "최준",
    },
    {
        quote: "양념으로 얼룩진 흰 쌀밥을 감싸줄 수 있는 건 김 한 장 뿐이다",
        author: "김갑생할머니김 명예회장 김갑생",
    },
    {
        quote: "저 지금 진짜 화장실 가고 싶은데, 하나도 안 그래 보이죠? 이게 바로 프로예요.",
        author: "국힙원탑 아이유",
    },
    {
        quote: "충범아, 샤방 집중 안 해?",
        author: "정승네트워크 대리 이미나",
    },
    {
        quote: "그대를 위한 천도 복숭아, 오예시",
        author: "한사랑산악회 배용길, 정광용",
    }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = "\"" + todaysQuote.quote + "\"";
author.innerText = todaysQuote.author;
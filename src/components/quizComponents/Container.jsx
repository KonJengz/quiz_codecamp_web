import useQuestionStore from "../../stores/questionStore.js";

const question = {
  id: 1,
  name: "Variable",
  detail: `แปลงวินาทีเป็น รูปแบบชั่วโมง:นาที:วินาที\nคำอธิบาย: เขียนฟังก์ชันที่รับวินาทีเป็นจำนวนเต็ม\nแล้วแปลงเป็นเวลารูปแบบ ชั่วโมง:นาที:วินาที\n\nตัวอย่างที่ 1:\nInput: 3661\nOutput: "1:1:1"\n\nตัวอย่างที่ 2:\nInput: 75\nOutput: "0:1:15"\n\nตัวอย่างที่ 3:\nInput: 12345\nOutput: "3:25:45"`,
};

function Container() {
  // const question = useQuestionStore((state) => state.question);

  return (
    <div className="flex flex-col flex-5/12 bg-gray-q-1/8 rounded-xl p-4 pl-6 h-full overflow-auto">
      <pre>{question?.detail}</pre>
    </div>
  );
}

export default Container;

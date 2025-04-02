import React from "react";

export default function Jupiter({ width = "199", height = "132" }) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 199 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2135_462)">
          <path
            d="M8.37277 111.357L12.4864 111.987L4.26233 111.677C5.01659 112.75 6.93713 112.164 8.05585 112.31L5.20991 112.626V112.937C13.922 114.811 22.4028 111.946 30.836 110.246C32.9435 109.821 35.0637 109.752 37.1776 109.309C42.5937 108.172 48.5391 105.94 53.8697 105.117C54.2088 105.063 54.9694 104.782 54.8934 105.351C43.9184 108.049 32.9911 111.259 21.769 112.889C16.9708 113.586 11.4691 114.288 6.63605 113.886C-7.65384 112.693 4.82644 102.208 9.85278 98.4563C16.394 93.5778 24.3518 88.8925 31.5776 85.065C32.9023 84.3622 34.433 83.536 35.799 82.9598C36.0874 82.8363 36.6039 82.2728 36.8511 82.7477C25.9903 89.8137 13.9347 95.167 4.25599 103.933C4.95004 103.936 6.25258 103.876 6.85789 103.686C8.69603 103.107 12.9015 98.6684 14.8728 97.1488C20.8594 92.5331 30.2624 86.8664 36.9526 83.1624C37.6244 82.792 47.7817 78.2111 47.3 77.8534L46.3524 77.5368L52.9918 74.6686L52.0189 66.6275C52.751 41.2664 73.487 22.1609 99.0054 24.1427C112.135 25.1621 124.105 33.3172 131.366 43.9637L139.08 41.811L134.015 44.179C134.022 44.4797 134.472 44.3246 134.735 44.2676C137.936 43.5901 141.685 42.099 144.959 41.1968C152.47 39.1295 160.377 37.1794 168.138 35.5839C172.122 34.7639 176.22 34.3144 180.222 33.5831L177.538 33.2728C173.969 34.1244 170.103 34.2859 166.544 34.938C161.378 35.8814 156.003 37.7651 150.914 38.6135C150.657 38.6578 149.804 38.7655 150.318 38.3286C159.451 36.1759 168.582 33.6781 177.899 32.3738C182.098 31.7849 186.922 31.2024 191.143 31.3734C191.527 31.3892 192.319 31.1359 192.246 31.6868L188.015 31.7311L182.438 32.9531C186.795 33.1019 191.042 31.5443 195.355 32.855C196.262 33.1304 196.769 33.7382 197.628 33.8997L195.891 32.3168C203.627 34.8367 194.845 42.4568 191.619 45.1287C176.172 57.9248 155.043 66.2476 137.191 75.172C135.733 79.183 134.662 83.1846 132.596 87.0215C120.119 110.211 90.2172 116.261 68.9836 100.954C66.4641 101.581 63.8146 102.835 61.3046 103.382C60.9846 103.452 60.1954 103.702 60.2747 103.142L66.2834 101.552C66.0362 100.903 64.2266 101.527 63.6879 101.651C57.7615 102.999 51.7432 105.117 45.7946 106.539C42.9265 107.222 25.8984 111.1 24.4026 110.721C24.1585 110.657 24.1966 110.1 24.0096 110.087C23.4803 110.053 22.2919 110.648 21.5027 110.66C19.6488 110.689 17.6458 110.708 15.8014 110.721C13.2375 110.74 10.7655 110.569 8.21114 110.407L10.1095 111.04H18.3367C18.8343 111.04 20.1748 110.379 21.0242 110.727V111.037C20.4316 110.768 19.5664 111.357 19.2843 111.357H8.37277ZM82.1136 90.1746C80.7413 90.4975 79.4197 91.023 77.9999 91.1212L82.4273 89.5383C82.5065 88.9779 81.7174 89.2312 81.3973 89.3008C80.4212 89.5129 78.7701 90.7444 78.32 89.5509L85.5965 87.012L84.332 86.0717C89.2284 84.4509 94.1343 82.735 98.9673 80.9305C101.908 79.832 105.071 78.2048 107.981 77.2835C108.234 77.2044 109.045 77.0873 108.538 77.5336L103.005 79.7528C103.3 80.4525 105.087 79.5376 105.613 79.3508C110.075 77.7837 114.37 75.6563 118.806 74.0291L118.531 73.4529L124.524 70.5816C120.242 72.0505 116.024 73.722 111.803 75.3524C101.164 79.4553 90.027 83.7955 79.0299 87.5723L73.8895 88.598L86.861 83.5391L85.9166 83.2225C86.0307 82.5767 87.0543 82.9534 86.5948 82.0037L94.4576 79.1134H92.5624L93.1931 78.4865C89.6721 78.5593 86.7438 80.5633 83.3844 81.3262L90.2679 77.9262L90.2045 77.5431L80.5385 81.3231L83.0675 80.0568L82.44 79.4331L90.6704 75.7925C89.8084 75.2258 88.3062 76.6282 87.6818 76.6029C87.3554 76.5902 87.3808 75.3651 86.5536 75.6342L86.8642 76.8846C85.194 77.6286 83.4256 77.961 81.6033 78.1256C81.2484 78.1573 80.4656 78.4169 80.5385 77.8502L103.639 68.0426C103.702 67.4474 102.995 67.7799 102.685 67.8812C96.7711 69.825 91.1204 72.6203 85.1306 74.3742L85.5838 73.8835L97.9437 68.6821C97.2274 68.7739 96.283 68.5207 95.627 68.6821C95.383 68.7423 95.421 69.3089 95.234 69.3184C94.7872 69.3374 94.1597 68.8246 93.4181 68.9924C93.1582 69.0525 90.5658 70.7082 90.3852 70.7557C89.3742 71.0343 87.9512 70.9931 86.8705 71.2052L93.9885 68.3624C94.4924 67.9065 93.6779 68.049 93.4308 68.1154C89.8813 69.0557 86.224 71.2591 82.6967 72.2563C82.3259 72.3607 80.8998 72.8483 80.8586 72.1613C84.5855 71.7434 87.4441 69.2045 90.981 68.3592C91.0348 67.7894 89.5612 67.935 90.344 67.2512L97.6268 64.5729C91.5166 65.3739 85.6852 68.2452 79.6701 69.5559C79.35 69.6255 78.5609 69.8756 78.6401 69.3153L86.2303 65.8297L83.3876 65.8392C85.118 65.0763 87.4568 64.7122 88.7657 63.3098L84.8137 64.2595L85.4919 63.3541L93.8301 59.8274L91.9349 59.5203C92.6797 59.2006 94.8252 59.0455 94.7808 57.9374C92.6797 57.8361 90.7908 58.9917 88.7847 59.3779C88.4583 59.4412 87.7484 59.7926 87.8213 59.2069C90.5943 57.909 93.8966 57.4562 96.1309 55.3225L104.276 51.9351L88.2967 56.6775L92.2486 54.7717L91.3042 54.148L94.1502 53.1983L88.6167 54.4646L90.3503 53.5149C89.5802 53.1856 87.9766 54.3316 87.5044 53.5149C89.409 52.8564 91.3835 52.2739 93.2755 51.5869C93.4783 51.5141 93.8808 50.7954 94.9393 51.0107L102.06 48.1394L85.606 53.1919L86.2367 52.5651C85.2859 53.0526 84.2116 52.5556 83.5334 52.6031C82.9059 52.6474 81.5494 53.7903 81.1786 52.8817L88.4551 50.0357C86.2177 50.4345 83.9263 50.0831 81.6889 50.3871C79.3247 50.7068 77.2267 51.9256 74.8498 51.9288L82.3703 49.1809L82.814 48.4939L83.6665 48.6997L83.8471 48.1647L84.6616 48.4528L84.3415 47.8259H85.6124C85.6314 47.2561 85.774 47.1516 85.1401 47.1896C83.2798 47.3004 81.1945 48.1014 79.2803 48.1362L83.7077 46.5565L81.1786 46.2399L81.4956 45.2965L80.0472 45.6067L79.9395 46.7179L72.0038 48.7662C71.9278 48.304 72.5553 48.3451 72.888 48.2343C74.2381 47.7816 76.0731 47.4872 77.3122 46.9712C77.9302 46.7148 77.3313 45.9265 78.6496 46.5533L78.3327 45.9328L79.5972 45.6036H77.702L77.7179 44.3816L80.2311 43.4002L77.8859 43.7136L75.4868 42.7702L80.2311 41.4975C79.9965 40.6903 78.1584 41.9313 78.019 40.8739C80.0346 40.5383 79.1789 39.6804 79.4134 39.291C79.7335 38.7591 80.8047 38.9554 80.8617 38.3444C77.9112 38.8161 75.0019 39.5284 72.0862 40.1679C71.7662 40.2376 70.9739 40.4877 71.0563 39.9273L80.548 36.7647C79.9237 36.8375 79.1282 36.6222 78.5482 36.7647C78.3042 36.8248 78.3581 37.3757 78.1299 37.4042C77.7496 37.4517 77.2932 37.0939 76.7354 37.2111C75.1065 37.553 73.43 38.7117 71.6869 38.6547L76.4312 36.7584C76.5199 36.2582 75.9939 36.4165 75.6706 36.4703C73.2905 36.8533 70.6442 38.4742 68.2071 38.5027L78.9634 34.5455C79.0363 33.9756 78.2757 34.2606 77.9397 34.3112C76.7798 34.4917 75.7245 35.1248 74.536 35.1786L79.9141 32.6555L74.2191 33.9123L78.019 32.1775C77.9999 31.614 75.5628 32.4402 75.1857 32.5131C74.8593 32.5764 74.1462 32.9246 74.2223 32.3389L79.2803 30.7497C79.3532 30.1609 78.637 30.4996 78.3169 30.5788C77.6862 30.7307 77.0809 31.0948 76.4502 31.2467C76.1333 31.3227 75.4139 31.6615 75.4868 31.0758L80.2342 29.4897L79.93 28.8851C84.1006 27.1724 89.1618 25.447 93.697 25.0608C95.1675 24.9373 97.1672 25.1336 98.7518 25.0671C99.1353 25.0513 99.9276 25.3046 99.8547 24.7537C87.3776 23.4494 74.0797 27.8594 65.1901 36.7552C64.8446 37.1003 62.6008 39.5917 62.5121 39.7722C62.0431 40.7251 63.9192 39.3163 63.4597 40.5541C62.7213 40.5636 61.2191 40.9625 60.9307 41.6685C60.5599 42.5771 62.2903 41.7381 62.192 42.4504C61.2444 42.5328 60.0813 42.7449 59.663 43.7168L60.6106 44.0333C58.2844 43.6693 58.8327 46.2114 58.6425 46.5121C58.5665 46.6324 58.0118 46.6958 57.7995 47.063C57.3463 47.8386 57.1181 48.8232 56.497 49.564C57.0801 50.1021 58.633 48.4274 59.0292 49.4057L56.1832 50.5169L56.8139 50.9854C55.1152 51.0012 55.6508 52.277 54.9219 53.3629L55.8663 53.8314C55.0677 53.8124 54.8617 53.9106 54.5701 54.5944C53.0679 58.0926 53.2993 62.9014 52.6939 66.6275L53.651 66.8016L52.6876 67.897C52.9602 70.7937 53.3183 73.2757 53.9965 76.0995C54.8046 79.4743 55.6983 82.4279 57.3939 84.8941C57.5238 85.0809 57.21 85.6 57.3463 86.0053C57.397 86.1541 58.2052 86.7745 58.2495 87.3444L59.3492 87.031L58.4017 87.8161C59.2605 88.9843 59.1528 89.9467 60.9307 89.5604L59.9799 89.8738C60.5757 93.4132 63.7322 90.678 65.995 90.8236C65.8112 91.4536 64.5784 91.2858 64.027 91.4789C63.7544 91.5739 63.4534 92.5141 62.23 92.1089C61.5518 94.0685 64.5436 95.0436 65.3612 96.6834C69.3512 97.1267 72.8468 94.727 76.7576 94.2996L67.5828 97.1457L68.5367 97.4591L68.2135 98.0859C69.2752 98.833 85.6789 92.3337 88.154 91.7607C88.2016 91.1402 87.2033 91.5264 86.8737 91.5897C84.3003 92.0741 81.6889 93.5746 79.0997 93.945C78.7701 93.9925 77.6545 94.2395 77.7116 93.6665C78.5577 93.8342 78.9507 93.2264 79.293 93.0301C77.1031 93.6126 74.9005 94.2996 72.6472 94.6067L80.1582 92.15L80.716 92.397C80.0631 92.4191 79.7272 92.78 79.293 93.0301C86.3571 91.1528 93.4117 88.6424 100.26 85.9958C107.746 83.1022 114.899 79.5946 122.334 76.5871C122.397 75.9919 121.69 76.3243 121.383 76.4256C118.284 77.4355 115.073 79.1292 111.974 80.3069C108.646 81.57 104.608 83.2447 101.217 84.109C100.964 84.1723 100.156 84.3179 100.66 83.862L115.371 78.4834L114.167 78.3884L82.1421 90.1873C82.8678 90.0163 83.5746 89.782 84.275 89.6269C84.5919 89.5573 85.3873 89.3103 85.3049 89.8675L78.0285 92.0804L82.1421 90.1873L82.1136 90.1746ZM186.244 40.5446C186.222 39.5284 187.34 38.7813 186.557 37.8632C185.654 36.809 182.434 35.5585 181.173 36.2677C180.634 36.5684 181.002 36.828 181.408 36.9895C182.064 37.2491 184.19 37.5118 184.513 37.9962L184.653 40.6333L182.447 43.2261L184.187 42.118L184.342 42.5866C183.068 43.6218 182.045 44.9672 180.866 46.0721C180.007 46.8762 178.913 47.6328 178.15 48.2407C177.113 49.0638 176.292 49.5513 175.272 50.2826C174.879 50.5643 174.394 50.615 174.537 51.2861L183.718 45.1255L186.874 40.6903L186.247 40.5415L186.244 40.5446ZM172.312 36.4323C168.338 36.5969 163.841 37.1889 159.968 38.164C158.139 38.6262 156.875 39.5474 154.973 39.8418C150.375 40.5573 145.818 41.5767 141.232 42.8398C139.127 43.4192 136.972 44.046 134.906 44.7425C134.573 44.8533 133.949 44.8121 134.022 45.2743L137.498 45.2807L134.652 46.2304C134.599 46.7939 135.72 46.566 136.069 46.5375C142.049 46.0753 148.432 43.97 154.587 44.0112C154.669 43.4857 153.823 43.6724 153.468 43.6851C152.146 43.7263 150.876 44.2138 149.525 44.0112L154.27 43.0614C154.27 42.5074 152.888 42.7132 152.517 42.7354C151.25 42.8145 149.934 43.2166 148.673 43.3464C147.637 43.454 146.556 43.2799 145.336 43.4667C143.428 43.7579 141.343 44.5937 139.473 44.8818C139.134 44.9356 138.373 45.2173 138.449 44.6475L155.144 40.2977C159.325 40.7726 163.609 38.7845 167.878 38.9491C167.66 38.3887 166.005 38.5945 165.492 38.6198C164.009 38.6958 162.5 39.1042 161.036 39.2277C160.678 39.2593 159.901 39.5221 159.971 38.9523L172.312 36.4228V36.4323ZM190.627 37.4232C189.27 36.5653 187.841 38.6388 189.407 39.4461C190.814 40.1711 191.368 37.8886 190.627 37.4232ZM160.288 63.3003C165.546 60.888 170.705 58.0799 175.69 55.1389C182.197 51.2988 188.979 47.1643 194.328 41.8268L196.046 38.3286C190.063 43.7326 184.428 49.1524 177.174 52.8247C175.25 53.7998 175.966 53.6035 174.958 54.4709C172.661 56.4495 166.208 59.3779 163.163 61.2742C162.221 61.8598 161.039 62.5057 160.288 63.3003ZM82.6999 40.2534L81.1596 40.5446L81.3435 42.1339L82.0217 42.7069L83.4034 42.2415L82.6999 40.2534ZM87.8181 43.3875C87.872 43.4318 87.1653 44.3816 87.9893 44.6348C89.3457 45.0496 89.9478 43.6693 88.7499 42.8968L86.861 43.0741C86.7628 43.6946 87.6343 43.2451 87.8149 43.3875H87.8181ZM137.502 69.3058C146.489 65.5828 155.449 61.5876 163.742 56.478C167.84 53.9549 173.96 49.966 177.234 46.5596C177.779 45.993 178.714 44.7868 178.958 44.0175C177.747 44.8311 176.907 46.0943 175.77 46.9933C172.363 49.6969 166.886 53.2363 163.112 55.5315C160.19 57.3075 157.021 58.6561 154.111 60.4511C153.176 60.5081 153.845 60.0902 154.168 59.8717C154.542 59.6216 158.352 57.8488 157.756 57.2948L153.794 58.8682C152.447 58.6213 155.503 57.7665 155.224 57.2948L151.427 58.7162C153.303 57.3075 155.36 56.1235 157.233 54.7147C157.528 54.4931 158.225 54.0752 157.287 54.1322C155.721 55.0091 153.883 56.3102 152.289 57.0447C151.585 57.3708 150.806 57.165 150.178 57.4657C146.005 59.4539 142.059 62.0118 137.869 63.9778L137.818 68.3529C140.718 67.0739 143.707 65.1523 146.667 64.0727C146.965 63.9651 147.697 63.658 147.624 64.2405L137.498 69.2994L137.502 69.3058ZM137.505 62.9869C140.626 61.3723 143.789 59.7198 146.778 57.8678C153.325 53.8061 168.208 43.7041 149.373 44.9704C147.231 45.1129 144.661 45.6447 142.506 46.0151C140.978 46.2779 134.624 47.4112 133.699 47.9684C133.176 48.285 133.54 48.3578 133.645 48.6522C134.282 50.4314 135.258 52.1631 135.828 54.0657C136.697 56.9561 137.232 59.9825 137.502 62.9869H137.505ZM162.5 59.1974L161.118 59.5488L139.717 70.5721C143.19 69.616 146.211 67.3303 149.595 66.0577L162.503 59.1974H162.5ZM137.181 64.5698L134.678 65.5511L134.912 66.1115L134.336 66.4629L135.28 66.7795L132.12 68.0521L132.754 68.5238L132.12 68.9955C133.014 69.1316 133.603 68.4637 134.323 68.1946C134.618 68.0838 135.356 67.783 135.283 68.3624L130.542 70.5847C130.479 71.1799 131.185 70.8475 131.493 70.7462C132.215 70.5119 132.976 70.0181 133.699 69.7838C134.009 69.6825 134.716 69.3501 134.649 69.9453L128.324 73.1079L137.156 69.5844C136.814 68.6663 137.746 67.5013 136.548 67.2638L137.191 66.9029L137.181 64.5793V64.5698ZM157.122 64.8863L155.74 65.2377L140.354 72.7818L141.736 72.4304L157.122 64.8863ZM136.551 74.0544L106.485 85.7552L106.802 86.3757L104.9 86.382L105.217 87.0025C101.275 88.2625 97.4905 89.9846 93.586 91.3586C86.392 93.8912 79.049 95.338 71.82 97.7535L68.1881 99.3364L69.0628 99.4947L68.9804 99.9759C69.6967 100.023 70.283 99.5105 70.9548 99.4187C77.2013 98.5703 85.5236 95.167 91.6845 92.9383C96.1975 91.3079 106.456 88.1738 110.066 86.0686C110.437 85.8533 110.12 85.3215 110.491 85.1062C116.296 81.7188 126.416 79.8921 132.545 76.2167L136.544 74.0513L136.551 74.0544ZM48.5645 79.1134C46.5172 79.7117 44.1942 80.8324 42.2736 81.8359C34.338 85.9863 26.7256 90.9787 18.8374 95.0974C17.5698 95.759 15.7855 97.668 14.7016 98.7095L18.1814 96.8196L17.5476 97.763C17.9437 98.0701 18.9706 96.8417 19.4649 96.6676C23.7307 95.186 27.4767 91.5517 31.3748 88.9748L48.5613 79.1165L48.5645 79.1134ZM60.2778 92.0677C58.8675 89.4338 57.1403 87.0151 55.8917 84.2799C55.5557 83.5423 54.082 79.1324 53.7905 79.1165C48.8434 81.8708 26.659 95.4551 45.5728 94.613C47.1986 94.5402 59.831 92.6661 60.2747 92.0677H60.2778ZM50.466 80.0631C44.5396 81.3611 39.6495 85.4861 34.5408 88.655C31.08 90.8014 27.9774 92.0804 24.6814 94.9296C23.7687 95.7179 22.3553 96.9462 21.9845 98.0827C23.249 97.3704 24.9857 95.0626 26.1171 94.4674C28.8743 93.027 32.9689 92.4698 35.7578 90.1873L50.466 80.0631ZM115.976 80.6931L111.872 82.124L102.368 86.3788C105.832 85.5747 109.026 83.805 112.389 82.6432L115.973 80.6931H115.976ZM100.786 91.7607L98.2543 91.2446L72.232 100.061L70.7235 101.081C82.5477 110.046 99.5473 111.287 112.928 104.99C113.923 104.522 115.289 104.009 115.98 103.142C111.451 104.338 107.217 106.64 102.533 107.254C102.013 106.858 102.821 106.925 103.068 106.846C104.498 106.383 105.955 105.943 107.432 105.668L106.805 105.044L108.383 104.721C108.462 104.18 107.632 104.386 107.283 104.411C106.589 104.465 105.933 104.807 105.22 104.721C106.044 103.838 105.607 103.819 105.179 102.863C103.746 103.129 104.086 103.218 103.772 104.449L94.2959 107.564L94.5907 106.906L101.423 104.728C97.6489 104.544 94.3783 106.994 90.6672 107.251L101.423 103.772C101.002 103.009 99.3381 103.905 98.6536 104.012C98.3176 104.066 97.5539 104.345 97.6268 103.778L103.636 102.189C103.667 101.761 102.083 101.594 101.88 101.603C100.878 101.657 99.5378 102.901 98.2574 102.505C98.0926 101.603 98.4824 101.989 98.9547 101.796C100.587 101.125 102.301 100.593 103.952 99.9759C104.025 99.387 103.309 99.7258 102.989 99.8049C101.094 100.258 99.3033 101.647 97.3098 100.926L102.054 99.3459C102.143 98.8203 101.595 99.1211 101.214 98.9248C101.084 98.8583 101.091 98.4436 100.901 98.3993C99.5251 98.0859 99.6043 99.4282 99.0149 99.596C98.7867 99.6593 98.3272 99.406 97.931 99.4915C97.2179 99.6498 96.5587 100.15 95.7284 99.9759L102.054 97.1362C100.853 96.9051 99.4459 97.7408 98.3747 97.7471C97.6426 97.7535 97.256 97.2786 96.8345 97.2564C96.2101 97.2248 95.0344 98.0922 94.1438 97.763L94.7777 96.9905L99.5219 94.9201L93.5132 96.1801L99.2082 93.9672C98.6346 92.7547 96.9612 93.6601 96.0707 93.8216C95.7411 93.8817 95.0344 94.268 95.0978 93.6601L100.79 91.7638L100.786 91.7607ZM56.161 94.9201C53.1757 94.1983 50.2885 95.0404 47.3 95.2335C47.0781 96.5283 49.2902 95.6071 49.997 95.5501C50.3456 95.5216 51.1759 95.319 51.0967 95.8603L43.1864 97.1298L45.0815 97.7566C41.0915 98.6177 37.2061 99.7479 33.0576 99.6593C32.9847 100.21 33.777 99.9569 34.1605 99.9727C36.623 100.077 38.8477 99.6055 41.2817 99.6593L36.2173 100.922L36.5374 101.549L31.1561 101.872C31.3748 102.436 33.0291 102.227 33.5425 102.198C35.7578 102.072 38.0681 101.375 40.3309 101.556L31.473 102.819C31.5649 103.376 33.1178 103.17 33.5457 103.148C34.7214 103.085 35.8212 102.698 37.0096 102.812L38.1157 103.129L30.5191 103.768L30.8392 104.395L24.6624 104.715L23.5595 105.028C31.6917 105.864 39.8745 103.784 47.8039 102.22C48.948 101.996 49.7656 101.609 50.0413 101.546C50.7607 101.385 51.4738 101.875 52.1774 101.847C53.182 101.809 54.6715 100.824 55.8378 100.913L55.2071 100.286L57.5745 99.9664C58.0942 99.5421 57.2069 99.6213 56.9533 99.6529C53.5528 100.077 49.6642 101.704 46.3619 102.04C46.0006 102.078 44.5047 102.078 44.4477 101.549L58.053 99.0135L54.8902 98.7032C56.5192 98.3328 58.8295 98.1239 59.9514 96.8069L53.3056 97.7503L58.3668 96.4872C58.4619 96.0376 57.7583 96.0566 57.4572 96.044C56.2878 95.9965 55.1152 96.0724 53.9394 95.854L56.1515 94.9106L56.161 94.9201ZM17.1895 100.653C16.7204 99.9125 14.4386 100.467 15.1644 101.872C15.9725 103.436 18.0483 102.008 17.1895 100.653ZM10.6197 106.254L12.648 100.926C11.6592 102.157 9.86546 102.527 9.9542 104.405L9.3267 104.085C8.95273 104.639 9.77989 107.324 10.3599 107.789C10.6039 107.985 14.147 108.922 14.6541 108.967C24.0064 109.806 33.0545 106.656 42.2958 105.567L53.9458 102.508C49.6515 102.942 45.5601 104.449 41.3546 105.256C33.2383 106.814 24.8906 108.447 16.7521 106.301L16.9169 106.928C15.8584 106.947 13.9696 106.545 13.7477 105.355L13.1202 106.295L14.3847 106.928L11.5388 105.985L12.1726 106.928L10.6229 106.254H10.6197Z"
            fill="#D100D7"
          />
          <path
            d="M33.24 47L33.34 49.88L35.79 50.69L36.23 52.24C33.04 52.3 33.57 53.94 32.11 55.98C30.65 54.26 31.38 52.4 28.45 52.32L28 50.77L30.89 49.89L30.99 47.01H33.23L33.24 47Z"
            fill="#D100D7"
          />
          <path
            d="M146.561 94.4875C143.631 89.8775 153.221 87.7775 151.581 93.3175C150.921 95.5575 147.361 95.7275 146.561 94.4875Z"
            fill="#D100D7"
          />
        </g>
        <path
          d="M53.5606 13.4875C50.6306 8.87749 60.2206 6.77749 58.5806 12.3175C57.9206 14.5575 54.3606 14.7275 53.5606 13.4875Z"
          fill="#D100D7"
        />
        <g clipPath="url(#clip1_2135_462)">
          <path
            d="M146.4 114L146.5 116.88L148.95 117.69L149.39 119.24C146.2 119.3 146.73 120.94 145.27 122.98C143.81 121.26 144.54 119.4 141.61 119.32L141.16 117.77L144.05 116.89L144.15 114.01H146.39L146.4 114Z"
            fill="#D100D7"
          />
        </g>
        <path
          d="M69.24 118L69.34 120.88L71.79 121.69L72.23 123.24C69.04 123.3 69.57 124.94 68.11 126.98C66.65 125.26 67.38 123.4 64.45 123.32L64 121.77L66.89 120.89L66.99 118.01H69.23L69.24 118Z"
          fill="#D100D7"
        />
        <g clipPath="url(#clip2_2135_462)">
          <path
            d="M156.4 0L156.5 2.88L158.95 3.69L159.39 5.24C156.2 5.3 156.73 6.94 155.27 8.98C153.81 7.26 154.54 5.4 151.61 5.32L151.16 3.77L154.05 2.89L154.15 0.01H156.39L156.4 0Z"
            fill="#D100D7"
          />
          <path
            d="M126.56 17.1198C123.63 12.5098 133.22 10.4098 131.58 15.9498C130.92 18.1898 127.36 18.3598 126.56 17.1198Z"
            fill="#D100D7"
          />
        </g>
        <defs>
          <clipPath id="clip0_2135_462">
            <rect
              width="199"
              height="90"
              fill="white"
              transform="translate(0 24)"
            />
          </clipPath>
          <clipPath id="clip1_2135_462">
            <rect
              width="33.4"
              height="17.89"
              fill="white"
              transform="translate(116 114)"
            />
          </clipPath>
          <clipPath id="clip2_2135_462">
            <rect
              width="33.4"
              height="17.89"
              fill="white"
              transform="translate(126)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

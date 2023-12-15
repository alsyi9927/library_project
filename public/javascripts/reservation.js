document.addEventListener('DOMContentLoaded', () => {
    const reserveButton = document.getElementById('reserveButton');
    const cancelButton = document.getElementById('cancelButton');

    if (reserveButton) {
        reserveButton.addEventListener('click', async () => {
            const seatNumber = reserveButton.dataset.seatNumber;
            const userInput = prompt('비밀번호를 입력하세요');

            if (userInput) {
                const response = await fetch(`/reserve/${seatNumber}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ password: userInput }),
                });

                if (response.ok) {
                    window.confirm(seatNumber + '번 좌석을 예약하시겠습니까?');
                    window.location.href = '/';
                } else {
                    alert('예약 실패');
                }
            }
        });
    } else if (cancelButton) {
        cancelButton.addEventListener('click', async () => {
            const seatNumber = cancelButton.dataset.seatNumber;

            const userInput = prompt('비밀번호를 입력하세요');

            if (userInput) {
                const response = await fetch(`/cancel/${seatNumber}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ password: userInput }),
                });

                if (response.ok) {
                    window.confirm(seatNumber + '번 좌석 예약을 취소 하시겠습니까?');
                    window.location.href = '/';
                } else {
                    alert('취소 실패');
                }
            }
        });
    }
});

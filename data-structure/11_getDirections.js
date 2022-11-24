/**
 *
 * @param {Array 타입을 요소로 갖는 인접 행렬이 담긴 2차원 배열} matrix
 * @param {Number 타입의 시작 정점} from
 * @param {Number 타입의 도착 정점} to
 *
 * 출력
 * boolean 타입을 리턴해야 합니다.
 */
function getDirections(matrix, from, to) {
	// TODO: 여기에 코드를 작성합니다.
}

const result = getDirections(
	[
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
		[0, 1, 0, 0],
	],
	0,
	2
);
console.log(result); // true
// 정점 0에서 2로 가는 길이 존재하는지 확인합니다.
// 0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.

const result2 = getDirections(
	[
		[0, 1, 0, 0, 0],
		[0, 0, 0, 1, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[1, 1, 1, 1, 0],
	],
	1,
	4
);
console.log(result2); // false

// 정점 1에서 4로 가는 길이 존재하는지 확인합니다.
// 1 --> 3,
// 3 --> 1 (정점 1을 다녀왔으니 다시 돌아가지 않습니다),
// 3 --> 2,
// 2 --> 1 (정점 1을 다녀왔으니 다시 돌아가지 않습니다)
// ...으로, 4에 도달할 수 없습니다.
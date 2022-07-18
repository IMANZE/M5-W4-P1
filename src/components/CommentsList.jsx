import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Loading from "./Loading";

const CommentsList = ({ comment }) => {
	const [isLoading, SetIsLoading] = useState(false);

	const deleteCommentary = async () => {
		SetIsLoading(true);
		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
			{
				method: "DELETE",
				headers: {
					Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMyZjA3ZjdjNDA0ZDAwMTU4OWFjNDMiLCJpYXQiOjE2NTY5NDI3MTksImV4cCI6MTY1ODE1MjMxOX0.DFHE848BNuqrF-Lwf_73U2NRAZY_AWGTxpSM0w7PpGo",
					"Content-type": "application/json",
				},
			}
		);
		if (response.ok) {
			alert("The commentary has been removed");
			SetIsLoading(false);
		} else {
			SetIsLoading(false);
			alert("Something is wrong");
		}
	};

	console.log(comment, "HELLO WORLD");
	return (
		<>
			{isLoading && <Loading />}

			<ListGroup.Item>
				<scan className="font-weight-bold">Rate: </scan> {comment.rate}
				<br />
				<scan className="font-weight-bold">Commentary: </scan> {comment.comment}{" "}
				<Button size="sm" variant="outline-danger" onClick={deleteCommentary}>
					Remove
				</Button>
			</ListGroup.Item>
		</>
	);
};

export default CommentsList;

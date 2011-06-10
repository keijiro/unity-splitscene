var moveForce : float;
var jumpForce : float;

function Update() {
	if (Input.GetButtonDown("Jump")) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
	}
}

function FixedUpdate() {
	var move = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	rigidbody.AddForce(move.normalized * moveForce, ForceMode.Force);
}

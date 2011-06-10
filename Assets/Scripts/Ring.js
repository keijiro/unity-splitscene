function Start() {
	transform.rotation = Random.rotation;
}

function Update() {
	transform.localRotation *= Quaternion.AngleAxis(Time.deltaTime * 180.0, Vector3.right);
}

var mergeScenes : String[];

function Awake() {
	for (var placeholder : GameObject in GameObject.FindGameObjectsWithTag("Placeholder")) {
		DestroyImmediate(placeholder);
	}
	
	for (var scene : String in mergeScenes) {
		Application.LoadLevelAdditive(scene);
	}
}

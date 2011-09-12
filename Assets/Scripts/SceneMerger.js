var mergeScenes : String[];

private static var semaphore : boolean;

function Awake() {
	if (semaphore) return;
	semaphore = true;
	
	ClearOverlay();

	for (var scene : String in mergeScenes) {
		Application.LoadLevelAdditive(scene);
	}
}

function ClearOverlay() {
	var overlay = GameObject.Find("_overlay");
	if (overlay) DestroyImmediate(overlay);
}

#if UNITY_EDITOR

function PushSceneObjects() {
	var cache = new GameObject("_cache");
	
	for (var go : GameObject in FindObjectsOfType(GameObject)) {
		if (go.transform.parent == null) {
			go.transform.parent = cache.transform;
		}
	}
}

function LoadScenesToOverlay() {
	var overlay = GameObject.Find("_overlay");

	for (var name : String in mergeScenes) {
		EditorApplication.OpenSceneAdditive("Assets/Scenes/" + name + ".unity");
	}

	overlay = new GameObject("_overlay");

	for (var go : GameObject in FindObjectsOfType(GameObject)) {
		if (go.transform.parent == null && go.name != "_cache" && go != overlay) {
			go.transform.parent = overlay.transform;
		}
	}
}

function PopSceneObjects() {
	var cache = GameObject.Find("_cache");

	var children : ArrayList = new ArrayList();
	
	for (var child : Transform in cache.transform) {
		children.Add(child);
	}
	
	for (child in children) {
		child.parent = null;
	}
	
	DestroyImmediate(cache);
}

#endif

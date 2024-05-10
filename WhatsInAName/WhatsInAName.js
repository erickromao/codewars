function nameInStr(str, name) {
	const wordStack = name.split('').reverse()

	for (let i = 0; i < str.length; i++) {
		if (wordStack.length > 0 && wordStack[wordStack.length - 1].toLowerCase() === str[i].toLowerCase())
			wordStack.pop()
	}

	return wordStack.length === 0
}
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

const encrypt = (text) => {
    return text.replace(/[eioua]/gi, (match) => {
        switch (match.toLowerCase()) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            case 'a':
                return 'ai';
            default:
                return match;
        }
    });
};

const decrypt = (text) => {
    return text.replace(/(enter|imes|ober|ufat|ai)/gi, (match) => {
        switch (match.toLowerCase()) {
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            case 'ai':
                return 'a';
            default:
                return match;
        }
    });
};

encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    const encryptedText = encrypt(text);
    outputText.value = encryptedText;
});

decryptBtn.addEventListener('click', () => {
    const text = outputText.value;
    const decryptedText = decrypt(text);
    outputText.value = decryptedText;
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles: ' + outputText.value);
});
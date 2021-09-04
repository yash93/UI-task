const enums = {
    'first': 'red',
    'second': 'orangered',
    'third': 'yellow',
    'fourth': 'yellowgreen',
    'fifth': 'green'
}

let getSiblings = function (e, side) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    if (side === 'left') {
        while (sibling) {
            if (sibling === e) {
                siblings.push(sibling);
                break;
            }
            if (sibling.nodeType === 1) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
    } else if (side === 'right') {
        let callingElement = false; 

        while (sibling) {
            if (sibling === e)
                callingElement = true;
            if (sibling.nodeType === 1 && callingElement) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
    }
    return siblings;
};

let buttons = document.querySelectorAll('.rating-box');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        let rightSiblings = getSiblings(e.target, 'right');
        
        rightSiblings.map(el => {
            el.style.background = 'grey';
        });

        let leftSiblings = getSiblings(e.target, 'left');
        leftSiblings.map(el => {
            el.style.background = enums[e.target.classList[1]];
        });
    });
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('hover', e => {
        let rightSiblings = getSiblings(e.target, 'right');
        
        rightSiblings.map(el => {
            el.style.background = 'grey';
        });

        let leftSiblings = getSiblings(e.target, 'left');
        leftSiblings.map(el => {
            el.style.background = enums[e.target.classList[1]];
        });
    });
}
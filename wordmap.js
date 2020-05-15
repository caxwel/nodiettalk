// map of diet talk words i've run into and their emoji replacements
// to be updated as more horrors show up in later versions, i bet!
let diettalk = new Map();
diettalk.set('weight','🍄');
diettalk.set('slim', '🌛');
diettalk.set('guilt','🐚');
diettalk.set('resist','🌾');
diettalk.set('guilty','🐚');
diettalk.set('skinny','🌜');
diettalk.set('lose weight','☀️');
diettalk.set('weight gain','🌿');
diettalk.set('gaining weight','🍃');
diettalk.set('stay on track','🍁');
diettalk.set('satisfy your craving','🌊');
diettalk.set('guilt-free','🦢');
diettalk.set('portion control','🐢');
diettalk.set('indulge','🐛');
diettalk.set('WW','🦆');
diettalk.set('sweet fix','🦄');
diettalk.set('staying on track','🌴');
diettalk.set('lose the weight','🌵');
diettalk.set('lose that weight','🍀');
diettalk.set('shed the pounds','☘️');
diettalk.set('shed those pounds','🌿');
diettalk.set('shed some extra pounds','🌳');
diettalk.set('shed the extra pounds','🌲');
diettalk.set('drop the','🌲');
diettalk.set('dropping the','🌲');
diettalk.set('waistline','🍃');
diettalk.set('weight loss','🍂');
diettalk.set('increased lifespan','💦');
diettalk.set('everything in moderation','💨');
diettalk.set('daily intake','🌱');
diettalk.set('daily allotment','🌱');
diettalk.set('daily carb allotment','🌱');
diettalk.set('problematic','🌼');
diettalk.set('tempting','🌻');
diettalk.set('temptation','🌻');
diettalk.set('cheat day','✨');
diettalk.set('dieting','⚡️');
diettalk.set('catching up to you','🌙');
diettalk.set('catch up to you','🌙');
diettalk.set('old habits','🐿');
diettalk.set('holiday pounds','🐕');
diettalk.set('holiday weight','🐕');
diettalk.set('winter body','🐕');
diettalk.set('beach body','🐬');
diettalk.set('summer body','🐬');
diettalk.set('bikini body','🦑');
diettalk.set('packing on the pounds','🦎');

// sort by length to avoid weird repeats
let sortable = Array.from(diettalk);
sortable.sort((a, b) => {
    const one = a[0];
    const two = b[0];

    if (one.length > two.length) {
        return -1;
    } else if (two.length > one.length) {
        return 1;
    } else {
        return 0;
    }
});

let alldiettalk = new Map(sortable);
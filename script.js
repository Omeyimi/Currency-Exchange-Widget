document.addEventListener('DOMContentLoaded', () => {
    populateCurrencyOptions();
    updateFlag('currency-from', 'currency-flag-from');
    updateFlag('currency-to', 'currency-flag-to');
});

// Define flags
const flags = {
    AED: 'https://flagcdn.com/w320/ae.png',
    AFN: 'https://flagcdn.com/w320/af.png',
    ALL: 'https://flagcdn.com/w320/al.png',
    AMD: 'https://flagcdn.com/w320/am.png',
    ANG: 'https://flagcdn.com/w320/aw.png',
    AOA: 'https://flagcdn.com/w320/ao.png',
    ARS: 'https://flagcdn.com/w320/ar.png',
    AUD: 'https://flagcdn.com/w320/au.png',
    AWG: 'https://flagcdn.com/w320/aw.png',
    AZN: 'https://flagcdn.com/w320/az.png',
    BAM: 'https://flagcdn.com/w320/ba.png',
    BBD: 'https://flagcdn.com/w320/bb.png',
    BDT: 'https://flagcdn.com/w320/bd.png',
    BGN: 'https://flagcdn.com/w320/bg.png',
    BHD: 'https://flagcdn.com/w320/bh.png',
    BIF: 'https://flagcdn.com/w320/bi.png',
    BMD: 'https://flagcdn.com/w320/bm.png',
    BND: 'https://flagcdn.com/w320/bn.png',
    BOB: 'https://flagcdn.com/w320/bo.png',
    BRL: 'https://flagcdn.com/w320/br.png',
    BSD: 'https://flagcdn.com/w320/bs.png',
    BTN: 'https://flagcdn.com/w320/bt.png',
    BWP: 'https://flagcdn.com/w320/bw.png',
    BYN: 'https://flagcdn.com/w320/by.png',
    BZD: 'https://flagcdn.com/w320/bz.png',
    CAD: 'https://flagcdn.com/w320/ca.png',
    CDF: 'https://flagcdn.com/w320/cd.png',
    CHF: 'https://flagcdn.com/w320/ch.png',
    CLP: 'https://flagcdn.com/w320/cl.png',
    CNY: 'https://flagcdn.com/w320/cn.png',
    COP: 'https://flagcdn.com/w320/co.png',
    CRC: 'https://flagcdn.com/w320/cr.png',
    CUP: 'https://flagcdn.com/w320/cu.png',
    CVE: 'https://flagcdn.com/w320/cv.png',
    CZK: 'https://flagcdn.com/w320/cz.png',
    DJF: 'https://flagcdn.com/w320/dj.png',
    DKK: 'https://flagcdn.com/w320/dk.png',
    DOP: 'https://flagcdn.com/w320/do.png',
    DZD: 'https://flagcdn.com/w320/dz.png',
    EGP: 'https://flagcdn.com/w320/eg.png',
    ERN: 'https://flagcdn.com/w320/er.png',
    ETB: 'https://flagcdn.com/w320/et.png',
    EUR: 'https://flagcdn.com/w320/eu.png',
    FJD: 'https://flagcdn.com/w320/fj.png',
    FKP: 'https://flagcdn.com/w320/fk.png',
    FOK: 'https://flagcdn.com/w320/fo.png',
    GAB: 'https://flagcdn.com/w320/ga.png',
    GAF: 'https://flagcdn.com/w320/gf.png',
    GBP: 'https://flagcdn.com/w320/gb.png',
    GEL: 'https://flagcdn.com/w320/ge.png',
    GHS: 'https://flagcdn.com/w320/gh.png',
    GIP: 'https://flagcdn.com/w320/gi.png',
    GMD: 'https://flagcdn.com/w320/gm.png',
    GNF: 'https://flagcdn.com/w320/gn.png',
    GTQ: 'https://flagcdn.com/w320/gt.png',
    GYD: 'https://flagcdn.com/w320/gy.png',
    HKD: 'https://flagcdn.com/w320/hk.png',
    HNL: 'https://flagcdn.com/w320/hn.png',
    HRK: 'https://flagcdn.com/w320/hr.png',
    HTG: 'https://flagcdn.com/w320/ht.png',
    HUF: 'https://flagcdn.com/w320/hu.png',
    IDR: 'https://flagcdn.com/w320/id.png',
    ILS: 'https://flagcdn.com/w320/il.png',
    INR: 'https://flagcdn.com/w320/in.png',
    IQD: 'https://flagcdn.com/w320/iq.png',
    IRR: 'https://flagcdn.com/w320/ir.png',
    ISK: 'https://flagcdn.com/w320/is.png',
    JMD: 'https://flagcdn.com/w320/jm.png',
    JOD: 'https://flagcdn.com/w320/jo.png',
    JPY: 'https://flagcdn.com/w320/jp.png',
    KES: 'https://flagcdn.com/w320/ke.png',
    KGS: 'https://flagcdn.com/w320/kg.png',
    KHR: 'https://flagcdn.com/w320/kh.png',
    KID: 'https://flagcdn.com/w320/ki.png',
    KMF: 'https://flagcdn.com/w320/km.png',
    KRW: 'https://flagcdn.com/w320/kr.png',
    KWD: 'https://flagcdn.com/w320/kw.png',
    KYD: 'https://flagcdn.com/w320/ky.png',
    KZT: 'https://flagcdn.com/w320/kz.png',
    LAK: 'https://flagcdn.com/w320/la.png',
    LBP: 'https://flagcdn.com/w320/lb.png',
    LKR: 'https://flagcdn.com/w320/lk.png',
    LRD: 'https://flagcdn.com/w320/lr.png',
    LSL: 'https://flagcdn.com/w320/ls.png',
    MAD: 'https://flagcdn.com/w320/ma.png',
    MDL: 'https://flagcdn.com/w320/md.png',
    MGA: 'https://flagcdn.com/w320/mg.png',
    MKD: 'https://flagcdn.com/w320/mk.png',
    MMK: 'https://flagcdn.com/w320/mm.png',
    MNT: 'https://flagcdn.com/w320/mn.png',
    MOP: 'https://flagcdn.com/w320/mo.png',
    MRU: 'https://flagcdn.com/w320/mr.png',
    MUR: 'https://flagcdn.com/w320/mu.png',
    MVR: 'https://flagcdn.com/w320/mv.png',
    MWK: 'https://flagcdn.com/w320/mw.png',
    MXN: 'https://flagcdn.com/w320/mx.png',
    MYR: 'https://flagcdn.com/w320/my.png',
    MZN: 'https://flagcdn.com/w320/mz.png',
    NAD: 'https://flagcdn.com/w320/na.png',
    NGN: 'https://flagcdn.com/w320/ng.png',
    NIO: 'https://flagcdn.com/w320/ni.png',
    NOK: 'https://flagcdn.com/w320/no.png',
    NPR: 'https://flagcdn.com/w320/np.png',
    NZD: 'https://flagcdn.com/w320/nz.png',
    OMR: 'https://flagcdn.com/w320/om.png',
    PAB: 'https://flagcdn.com/w320/pa.png',
    PEN: 'https://flagcdn.com/w320/pe.png',
    PGK: 'https://flagcdn.com/w320/pg.png',
    PHP: 'https://flagcdn.com/w320/ph.png',
    PKR: 'https://flagcdn.com/w320/pk.png',
    PLN: 'https://flagcdn.com/w320/pl.png',
    PYG: 'https://flagcdn.com/w320/py.png',
    QAR: 'https://flagcdn.com/w320/qa.png',
    RON: 'https://flagcdn.com/w320/ro.png',
    RSD: 'https://flagcdn.com/w320/rs.png',
    RUB: 'https://flagcdn.com/w320/ru.png',
    RWF: 'https://flagcdn.com/w320/rw.png',
    SAR: 'https://flagcdn.com/w320/sa.png',
    SBD: 'https://flagcdn.com/w320/sb.png',
    SCR: 'https://flagcdn.com/w320/sc.png',
    SDG: 'https://flagcdn.com/w320/sd.png',
    SEK: 'https://flagcdn.com/w320/se.png',
    SGD: 'https://flagcdn.com/w320/sg.png',
    SHP: 'https://flagcdn.com/w320/sh.png',
    SLL: 'https://flagcdn.com/w320/sl.png',
    SOS: 'https://flagcdn.com/w320/so.png',
    SRD: 'https://flagcdn.com/w320/sr.png',
    SSP: 'https://flagcdn.com/w320/ss.png',
    STN: 'https://flagcdn.com/w320/st.png',
    SVC: 'https://flagcdn.com/w320/sv.png',
    SYP: 'https://flagcdn.com/w320/sy.png',
    SZL: 'https://flagcdn.com/w320/sz.png',
    THB: 'https://flagcdn.com/w320/th.png',
    TJS: 'https://flagcdn.com/w320/tj.png',
    TMT: 'https://flagcdn.com/w320/tm.png',
    TND: 'https://flagcdn.com/w320/tn.png',
    TOP: 'https://flagcdn.com/w320/to.png',
    TRY: 'https://flagcdn.com/w320/tr.png',
    TTD: 'https://flagcdn.com/w320/tt.png',
    TWD: 'https://flagcdn.com/w320/tw.png',
    TZS: 'https://flagcdn.com/w320/tz.png',
    UAH: 'https://flagcdn.com/w320/ua.png',
    UGX: 'https://flagcdn.com/w320/ug.png',
    USD: 'https://flagcdn.com/w320/us.png',
    UYU: 'https://flagcdn.com/w320/uy.png',
    UZS: 'https://flagcdn.com/w320/uz.png',
    VND: 'https://flagcdn.com/w320/vn.png',
    VUV: 'https://flagcdn.com/w320/vu.png',
    WST: 'https://flagcdn.com/w320/ws.png',
    XAF: 'https://flagcdn.com/w320/cm.png',
    XAG: 'https://flagcdn.com/w320/xag.png',
    XAU: 'https://flagcdn.com/w320/xau.png',
    XCD: 'https://flagcdn.com/w320/ec.png',
    XOF: 'https://flagcdn.com/w320/ci.png',
    XPF: 'https://flagcdn.com/w320/pf.png',
    YER: 'https://flagcdn.com/w320/ye.png',
    ZAR: 'https://flagcdn.com/w320/za.png',
    ZMW: 'https://flagcdn.com/w320/zm.png',
    ZWL: 'https://flagcdn.com/w320/zw.png'
};


// Populate currency options in select elements
function populateCurrencyOptions() {
    const currencyFromSelect = document.getElementById('currency-from');
    const currencyToSelect = document.getElementById('currency-to');

    Object.keys(flags).forEach(currency => {
        const optionFrom = document.createElement('option');
        const optionTo = document.createElement('option');
        optionFrom.value = currency;
        optionTo.value = currency;
        optionFrom.textContent = currency;
        optionTo.textContent = currency;
        currencyFromSelect.appendChild(optionFrom);
        currencyToSelect.appendChild(optionTo);
    });

    // Set initial flags
    document.getElementById('currency-flag-from').src = flags[currencyFromSelect.value];
    document.getElementById('currency-flag-to').src = flags[currencyToSelect.value];
}

// Update the flag image based on the selected currency
function updateFlag(selectId, flagId) {
    const select = document.getElementById(selectId);
    const flag = document.getElementById(flagId);
    flag.src = flags[select.value];
}

// Convert currency based on the selected currencies and input amount
async function convertCurrency() {
    const amountFrom = document.getElementById('amount-from').value;
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;
    const amountTo = document.getElementById('amount-to');

    if (amountFrom === '') {
        amountTo.value = '';
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
        const data = await response.json();
        const rate = data.rates[currencyTo];
        const convertedAmount = (amountFrom * rate).toFixed(2);

        amountTo.value = convertedAmount;
        document.getElementById('exchange-rate').textContent = `1 ${currencyFrom} = ${rate} ${currencyTo}`;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}

// Reverse currency conversion
function reverseConvertCurrency() {
    const amountTo = document.getElementById('amount-to').value;
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;
    const amountFrom = document.getElementById('amount-from');

    if (amountTo === '') {
        amountFrom.value = '';
        return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyTo}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[currencyFrom];
            const convertedAmount = (amountTo / rate).toFixed(2);

            amountFrom.value = convertedAmount;
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
}

// Swap the selected currencies and update the conversion
function swapCurrencies() {
    const currencyFromSelect = document.getElementById('currency-from');
    const currencyToSelect = document.getElementById('currency-to');
    const tempValue = currencyFromSelect.value;
    currencyFromSelect.value = currencyToSelect.value;
    currencyToSelect.value = tempValue;
    convertCurrency();
    updateFlag('currency-from', 'currency-flag-from');
    updateFlag('currency-to', 'currency-flag-to');
}

// Focus on the select element to open the dropdown
function toggleCurrencyDropdown(id) {
    const selectElement = document.getElementById(id);
    selectElement.focus();
}

// Add event listeners to make the flags and separators clickable
document.querySelectorAll('.currency-select-container').forEach(container => {
    container.addEventListener('click', () => {
        const selectId = container.querySelector('select').id;
        toggleCurrencyDropdown(selectId);
    });
});

// Initial conversion on page load
convertCurrency();

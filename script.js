const supportHeader = document.querySelector('.support_header');
const membershipHeader = document.querySelector('.membership_header');
const membershipComponents = document.querySelector('.membership');
const supportComponents = document.querySelector('.support');
const placeHolder = document.getElementById('range')
const value = document.getElementById('value')
const btns = document.querySelectorAll('.rate')
 
placeHolder.value ='1'
 
   
supportHeader.addEventListener('click', () => {
    if (supportComponents.classList.contains('hidden'));
        supportComponents.classList.remove('hidden');
    membershipComponents.classList.add('hidden');
    if(supportHeader.classList.contains('remove_border'))
    supportHeader.classList.remove('remove_border')
        membershipHeader.classList.add('remove_border')
     
});

membershipHeader.addEventListener('click', () => {
    if (membershipComponents.classList.contains('hidden'));
        membershipComponents.classList.remove('hidden');
    supportComponents.classList.add('hidden');
    if(membershipHeader.classList.contains('remove_border'))
        membershipHeader.classList.remove('remove_border')
    supportHeader.classList.add('remove_border')
 

    
});

btns.forEach((el ) => {
    el.addEventListener('click', () => {
        if (!el.classList.contains('selected')) 
            btns.forEach((el) => el.classList.remove("selected"));
        el.classList.add("selected");
        
        placeHolder.value = `${el.value}`;
        value.textContent = `$${placeHolder.value*3}`;
    })
    value.textContent = `$${placeHolder.value*3}`;
   
});
placeHolder.value ='1'
placeHolder.addEventListener('keyup', () => {
    value.textContent = `$${placeHolder.value * 3}`
}
) 
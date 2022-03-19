function MenuIcon(props) {
    return (
        <svg viewBox="0 0 37 33" className="button-icon__img">
            <path d="M15.4297 1.625C15.2188 0.148438 12.2656 0.148438 12.0547 1.69531V11.6094C11.9844 11.8203 11 11.8203 10.9297 11.6094C10.8594 9.85156 10.4375 1.83594 10.3672 1.625C10.1562 0.148438 7.27344 0.148438 7.0625 1.625C6.99219 1.83594 6.57031 9.85156 6.5 11.6094C6.42969 11.8203 5.44531 11.8203 5.375 11.6094V1.69531C5.16406 0.148438 2.21094 0.148438 2 1.625C1.92969 1.90625 0.875 8.23438 0.875 10.625C0.875 14.3516 2.77344 16.9531 5.65625 18.0078L4.8125 34.7422C4.74219 35.7266 5.51562 36.5 6.5 36.5H11C11.9141 36.5 12.6875 35.7266 12.6875 34.7422L11.7734 18.0078C14.6562 16.9531 16.625 14.3516 16.625 10.625C16.625 8.23438 15.5 1.90625 15.4297 1.625ZM23.8672 21.6641L22.8125 34.6719C22.6719 35.6562 23.5156 36.5 24.5 36.5H28.4375C29.3516 36.5 30.125 35.7969 30.125 34.8125V2.1875C30.125 1.27344 29.3516 0.5 28.4375 0.5C22.6016 0.5 12.8281 13.0859 23.8672 21.6641Z" fill={props.fill} />
        </svg>
    );
}

export default MenuIcon;
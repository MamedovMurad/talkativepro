export const PostSVG = ({  height = "6",
width = "11",
color = "#333333",
...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12V19C23 20.1641 23 20.7462 22.8266 21.211C22.5479 21.9584 21.9584 22.5479 21.211 22.8266C20.7462 23 20.1641 23 19 23H12C5.92487 23 1 18.0751 1 12Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.65"/>
    <path d="M7.875 10.625L16.125 10.625" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16.125H16.125" stroke="white" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  
  );
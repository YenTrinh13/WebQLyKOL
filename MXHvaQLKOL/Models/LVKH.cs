//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MXHvaQLKOL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class LVKH
    {
        public int ma { get; set; }
        public string accname { get; set; }
        public string malv { get; set; }
    
        public virtual AccCustomer AccCustomer { get; set; }
        public virtual TTLinhVuc TTLinhVuc { get; set; }
    }
}

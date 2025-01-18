import person from "../../assets/person.svg";

const Profile = () => {
	return (
		<div className="bg-white w-[60%] rounded-default p-6 flex flex-col gap-8">
			<p className="text-base text-mediumGray ">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
				suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis
				aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla
				finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec
				efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo
				eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae
				ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis.
				Phasellus tempor tellus eu vulputate tempus.
			</p>

			<div className="w-[142px]">
				<img src={person} alt="usuário" width="100%" />
			</div>
		</div>
	);
};

export default Profile;
